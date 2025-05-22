import { useEffect, useRef } from 'react';
import { animate, createScope, onScroll, stagger, Scope } from 'animejs';
import { FlowPulseBackground } from './FlowAnimationSection';
import '@styles/CustomSoftwareSection.scss';

export const CustomSoftwareSection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const scope = useRef<Scope>(null);

	useEffect(() => {
		const root = sectionRef.current;
		if (!root) return;
		const lines = Array.from(root.querySelectorAll<HTMLElement>('.line'));

		scope.current = createScope({ root }).add(() => {
			animate(lines, {
				opacity: [0, 1],
				translateY: [80, 0],
				duration: 1000,
				easing: 'easeOutQuart',
				delay: stagger(200),
				autoplay: onScroll({ target: root }),
			});
		});

		return () => scope.current?.revert();
	}, []);

	return (
		<section className='custom-software-section' ref={sectionRef}>
			<FlowPulseBackground trackRef={sectionRef} />

			<div className='line'>Diseñamos tecnología</div>
			<div className='line'>que potencia tu negocio</div>
			<div className='line small'>
				Software a la medida · Tercerización estratégica
			</div>
		</section>
	);
};
