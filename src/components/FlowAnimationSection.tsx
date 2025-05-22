import { useEffect, useRef } from 'react';
import { animate, createScope, onScroll, Scope } from 'animejs';
import '@styles/FlowAnimationSection.scss';

interface Props {
	trackRef: React.RefObject<HTMLElement | null>;
}

export const FlowPulseBackground = ({ trackRef }: Props) => {
	const scope = useRef<Scope>(null);
	const dotsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const root = trackRef.current;
		const wrapper = dotsRef.current;
		if (!root || !wrapper) return;

		const count = 120;

		wrapper.innerHTML = Array(count).fill('<span class="dot"></span>').join('');

		const dots = Array.from(wrapper.querySelectorAll<HTMLElement>('.dot'));

		scope.current = createScope({ root }).add(() => {
			animate(dots, {
				autoplay: onScroll({
					target: root,
					sync: 1,
					onUpdate: ({ progress }) => {
						const idx = Math.floor(progress * (dots.length - 1));
						dots.forEach((d, i) => d.classList.toggle('on', i <= idx));
					},
				}),
			});
		});

		return () => scope.current?.revert();
	}, [trackRef]);

	return <div className='flow-pulse-bg' ref={dotsRef} />;
};
