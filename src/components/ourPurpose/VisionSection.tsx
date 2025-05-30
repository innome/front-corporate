import { useRef } from 'react';
import { useRevealOnScroll } from '@hooks/useRevealOnScroll';
import { useScrollFade } from '@hooks/useScrollFade';
import '@styles/ourPurpose/section-shared.scss';

export const VisionSection = () => {
	const ref = useRef<HTMLElement>(null);
	useRevealOnScroll(ref);
	useScrollFade(ref);

	return (
		<section ref={ref} className='vision-section section-shared'>
			<article>
				<h2 className='section-title'>Visión</h2>
				<p className='section-description'>
					Ser la empresa líder en Latinoamérica en tercerización de servicios y desarrollo de software a medida para empresas emprendedoras, destacándonos por la excelencia, la innovación y el compromiso social. Aspiramos a ampliar nuestra presencia global mientras impulsamos el desarrollo económico y tecnológico en Colombia, generando oportunidades que transformen positivamente nuestra sociedad.
				</p>
			</article>
		</section>
	);
};
