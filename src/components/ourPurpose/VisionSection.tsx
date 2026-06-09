import { useRef } from 'react';
import { useRevealOnScroll } from '@hooks/useRevealOnScroll';
import { useScrollFade } from '@hooks/useScrollFade';
import { companyVision } from '@data/company-content';
import '@styles/ourPurpose/section-shared.scss';

export const VisionSection = () => {
	const ref = useRef<HTMLElement>(null);
	useRevealOnScroll(ref);
	useScrollFade(ref);

	return (
		<section ref={ref} className='vision-section section-shared'>
			<article>
				<h2 className='section-title'>Visión</h2>
				<p className='section-description'>{companyVision}</p>
			</article>
		</section>
	);
};
