import { useScrollAnimation } from '@hooks/useScrollAnimationOptions';
import { caseStudies } from '@data/company-content';
import { CaseLogo } from '@components/cases/CaseLogo';
import '@styles/cases/cases-section.scss';

export const CasesSection = ({ showHeader = true }: { showHeader?: boolean }) => {
	const sectionRef = useScrollAnimation({
		animations: [
			{
				selector: '.cases-fade',
				animation: {
					opacity: [0, 1],
					translateY: [50, 0],
					duration: 800,
					easing: 'easeOutQuart',
					staggerDelay: 150,
				},
			},
		],
		observer: { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
		onlyScrollDown: false,
	});

	return (
		<section id="casos" className={`cases-section ${showHeader ? '' : 'cases-section--embedded'}`} ref={sectionRef}>
			{showHeader && (
				<div className="cases-section__header cases-fade">
					<p className="cases-section__eyebrow">Casos de éxito</p>
					<h2 className="cases-section__title">Resultados en distintos países</h2>
					<p className="cases-section__subtitle">
						De Colombia a Andorra, ayudamos a empresas a integrar sistemas, automatizar procesos y tomar mejores decisiones.
					</p>
				</div>
			)}

			<div className="cases-section__grid">
				{caseStudies.map((caseItem) => (
					<article key={caseItem.id} className="cases-section__card cases-fade">
						<div className="cases-section__card-top">
							<CaseLogo src={caseItem.logoSrc} alt={caseItem.logoAlt} client={caseItem.client} />
							<div className="cases-section__meta">
								<span className="cases-section__chip">{caseItem.region}</span>
								<span className="cases-section__chip cases-section__chip--muted">{caseItem.industry}</span>
							</div>
						</div>
						<h3 className="cases-section__client">
							{caseItem.website ? (
								<a href={caseItem.website} target="_blank" rel="noopener noreferrer">
									{caseItem.client}
								</a>
							) : (
								caseItem.client
							)}
						</h3>
						<p className="cases-section__card-title">{caseItem.title}</p>
						<p className="cases-section__card-desc">{caseItem.description}</p>
						<ul className="cases-section__highlights">
							{caseItem.highlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>
						{caseItem.website && (
							<a
								href={caseItem.website}
								className="cases-section__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Visitar sitio web
							</a>
						)}
					</article>
				))}
			</div>
		</section>
	);
};
