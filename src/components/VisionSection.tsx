import { useRef } from 'react';
import { useRevealOnScroll } from '@hooks/useRevealOnScroll';
import { useScrollFade } from '@hooks/useScrollFade';
import '@styles/SectionShared.scss';

export const VisionSection = () => {
	const ref = useRef<HTMLElement>(null);
	useRevealOnScroll(ref);
	useScrollFade(ref);

	return (
		<section ref={ref} className='vision-section section-shared'>
			<h2 className='section-label'>Visión</h2>
			<p className='line'>
				Convertirnos en el aliado estratégico #1 en transformación digital,
				donde cada flujo automatizado impulse la innovación y la eficiencia.
			</p>
		</section>
	);
};
