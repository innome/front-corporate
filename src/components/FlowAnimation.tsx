import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import '@styles/FlowVision.scss';

interface Props {
	pathD: string;
	color?: string;
	invert?: boolean;
	trackRef: React.RefObject<HTMLElement | null>;
}

export const FlowAnimation = ({
	pathD,
	color = '#4c69c1',
	invert = false,
	trackRef,
}: Props) => {
	const svgRef = useRef<SVGSVGElement>(null);
	const pathRef = useRef<SVGPathElement>(null);
	const dotRef = useRef<SVGCircleElement>(null);

	useEffect(() => {
		const path = pathRef.current!;
		const dot = dotRef.current!;
		const length = path.getTotalLength();

		// Prepare and draw path once
		path.style.strokeDasharray = `${length}`;
		path.style.strokeDashoffset = `${length}`;
		animate(path, {
			strokeDashoffset: [length, 0],
			duration: 800,
			easing: 'easeOutCubic',
		});

		const onScroll = () => {
			const trackEl = trackRef.current;
			if (!trackEl) return;

			const scrollY = window.pageYOffset;
			const winH = window.innerHeight;
			const start = trackEl.offsetTop;
			const end = trackEl.offsetTop + trackEl.offsetHeight - winH;
			let p = (scrollY - start) / (end - start);
			p = Math.max(0, Math.min(1, p));
			if (invert) p = 1 - p;

			const { x, y } = path.getPointAtLength(p * length);
			dot.setAttribute('cx', `${x}`);
			dot.setAttribute('cy', `${y}`);

			// Styles before start and after end
			if (p <= 0 || p >= 1) {
				dot.style.opacity = '0';
			} else {
				path.style.stroke = color;
				dot.style.opacity = '1';
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, [pathD, invert, trackRef]);

	return (
		<div className='flow-vision-container'>
			<svg
				ref={svgRef}
				className='flow-vision'
				viewBox='0 0 800 300'
				preserveAspectRatio='xMinYMin meet'
			>
				<path
					ref={pathRef}
					d={pathD}
					stroke={color}
					strokeWidth='4'
					fill='none'
					strokeLinecap='round'
					className='flow-vision-path'
				/>
				<circle
					ref={dotRef}
					r='6'
					cx='0'
					cy='0'
					fill={color}
					className='flow-vision-dot'
				/>
			</svg>
		</div>
	);
};
