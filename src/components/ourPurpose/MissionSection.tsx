import { useRef } from 'react';
import { useRevealOnScroll } from '@hooks/useRevealOnScroll';
import { useScrollFade } from '@hooks/useScrollFade';
import { companyMission } from '@data/company-content';
import '@styles/ourPurpose/section-shared.scss';

export const MissionSection = () => {
	const ref = useRef<HTMLElement>(null);
	useRevealOnScroll(ref);
	useScrollFade(ref);

	return (
		<section ref={ref} className='mission-section section-shared'>
			<article>
				<h2 className='section-title'>Misión</h2>
				<p className='section-description'>{companyMission}</p>
			</article>
		</section>
	);
};
