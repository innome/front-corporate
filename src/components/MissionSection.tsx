import { useRef } from 'react';
import { useRevealOnScroll } from '@hooks/useRevealOnScroll';
import { useScrollFade } from '@hooks/useScrollFade';
import '@styles/SectionShared.scss';

export const MissionSection = () => {
	const ref = useRef<HTMLElement>(null);
	useRevealOnScroll(ref);
	useScrollFade(ref);

	return (
		<section ref={ref} className='mission-section section-shared'>
			<h2 className='section-label'>Misión</h2>
			<p className='line'>
				Capacitar a empresas de todos los tamaños con soluciones de
				automatización de flujos que optimizan cada proceso, reducen fricción y
				liberan tu mejor recurso: el talento humano.
			</p>
		</section>
	);
};
