import type { ReactNode } from 'react';
import { useScrollAnimation } from '@hooks/useScrollAnimationOptions';
import '@styles/layout/page-hero.scss';

interface PageHeroProps {
	eyebrow?: string;
	title: string;
	subtitle?: string;
	children?: ReactNode;
}

export const PageHero = ({ eyebrow, title, subtitle, children }: PageHeroProps) => {
	const sectionRef = useScrollAnimation({
		animations: [
			{
				selector: '.page-hero-fade',
				animation: {
					opacity: [0, 1],
					translateY: [50, 0],
					duration: 900,
					easing: 'easeOutQuart',
					staggerDelay: 120,
				},
			},
		],
		observer: { threshold: 0.2 },
		onlyScrollDown: false,
	});

	return (
		<section className="page-hero" ref={sectionRef}>
			<div className="page-hero__content">
				{eyebrow && <p className="page-hero__eyebrow page-hero-fade">{eyebrow}</p>}
				<h1 className="page-hero__title page-hero-fade">{title}</h1>
				{subtitle && <p className="page-hero__subtitle page-hero-fade">{subtitle}</p>}
				{children && <div className="page-hero__actions page-hero-fade">{children}</div>}
			</div>
		</section>
	);
};
