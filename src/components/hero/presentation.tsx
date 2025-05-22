import { useEffect, useRef } from 'react';
import { animate, createScope } from 'animejs';
import '@styles/heroLanding.scss';

export const HeroLanding = () => {
	const root = useRef<HTMLDivElement>(null);
	const scope = useRef<any>(null);

	useEffect(() => {
		scope.current = createScope({ root }).add(() => {
			animate('.hero-title', {
				translateY: [40, 0],
				opacity: [0, 1],
				duration: 1200,
				easing: 'easeOutExpo',
			});

			animate('.hero-subtitle', {
				translateY: [60, 0],
				opacity: [0, 1],
				delay: 200,
				duration: 1200,
				easing: 'easeOutExpo',
			});

			animate('.circle', {
				translateY: [-10, 10],
				direction: 'alternate',
				loop: true,
				easing: 'easeInOutSine',
				duration: 3000,
				delay: (el, i) => i * 200,
			});

			animate('.line', {
				scaleX: [0, 1],
				easing: 'easeOutExpo',
				duration: 1500,
				delay: 1000,
			});
		});

		return () => scope.current?.revert();
	}, []);

	return (
		<section ref={root} className='hero-landing'>
			<div className='hero-content'>
				<h1 className='hero-title'>Software hecho a la medida</h1>
				<p className='hero-subtitle'>
					Soluciones tecnológicas que se adaptan a ti
				</p>
			</div>

			<svg
				className='hero-graphic'
				viewBox='0 0 600 400'
				preserveAspectRatio='xMidYMid slice'
			>
				<circle className='circle' cx='100' cy='100' r='8' fill='#4c69c1' />
				<circle className='circle' cx='200' cy='160' r='6' fill='#2d3051' />
				<circle className='circle' cx='300' cy='80' r='10' fill='#4c69c1' />
				<line
					className='line'
					x1='100'
					y1='100'
					x2='200'
					y2='160'
					stroke='#ccc'
					strokeWidth='2'
				/>
				<line
					className='line'
					x1='200'
					y1='160'
					x2='300'
					y2='80'
					stroke='#ccc'
					strokeWidth='2'
				/>
			</svg>
		</section>
	);
};
