import type { PageContent } from '@data/pages-content';
import { PageHero } from '@components/layout/PageHero';
import { Footer } from '@components/Footer';
import { useScrollAnimation } from '@hooks/useScrollAnimationOptions';
import { ROUTES } from '@components/navbar/nav-data';
import '@styles/layout/page-detail.scss';
import '@styles/shared/cta-button.scss';

interface PageDetailProps {
	content: PageContent;
	backHref: string;
	backLabel: string;
}

const CheckIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
		<circle cx="10" cy="10" r="10" fill="var(--color-acrylic)" />
		<path d="M6 10l3 3 5-6" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export const PageDetail = ({ content, backHref, backLabel }: PageDetailProps) => {
	const sectionRef = useScrollAnimation({
		animations: [
			{
				selector: '.detail-fade',
				animation: {
					opacity: [0, 1],
					translateY: [40, 0],
					duration: 800,
					easing: 'easeOutQuart',
					staggerDelay: 100,
				},
			},
		],
		observer: { threshold: 0.15 },
		onlyScrollDown: false,
	});

	return (
		<main>
			<PageHero eyebrow={content.category} title={content.title} subtitle={content.tagline} />

			<section className="page-detail" ref={sectionRef}>
				<a href={backHref} className="page-detail__back detail-fade">
					← {backLabel}
				</a>

				<div className="page-detail__card detail-fade">
					<p className="page-detail__description">{content.description}</p>
					<h2 className="page-detail__benefits-title">Qué ganas con esto</h2>
					<ul className="page-detail__benefits">
						{content.benefits.map((benefit) => (
							<li key={benefit}>
								<CheckIcon />
								<span>{benefit}</span>
							</li>
						))}
					</ul>
					<a href={ROUTES.contacto} className="nival-cta nival-cta--primary">
						{content.ctaLabel ?? 'Cuéntanos tu proyecto'}
					</a>
				</div>
			</section>

			<Footer />
		</main>
	);
};
