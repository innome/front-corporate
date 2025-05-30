import { useRef } from 'react';
import { useRevealOnScroll } from '@hooks/useRevealOnScroll';
import { useScrollFade } from '@hooks/useScrollFade';
import '@styles/ourPurpose/section-shared.scss';

export const MissionSection = () => {
	const ref = useRef<HTMLElement>(null);
	useRevealOnScroll(ref);
	useScrollFade(ref);

	return (
		<section ref={ref} className='mission-section section-shared'>
			<article>
				<h2 className='section-title'>Misión</h2>
				<p className='section-description'>
					Empoderar a empresas pequeñas y medianas mediante el diseño, creación e implementación  profesional de software a la medida de sus necesidades, permitiendo la estandarización y automatización de diversos procesos ofimáticos bajo nuestro estándar de seguridad y excelencia. Todo esto lo hacemos guiados por nuestros valores fundamentales: honestidad, confianza y eficiencia, que nos permiten construir relaciones sólidas y ofrecer soluciones sostenibles en el tiempo y de alto impacto.
				</p>
			</article>
		</section>
	);
};
