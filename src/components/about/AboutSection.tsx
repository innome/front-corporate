import { useScrollAnimation } from '@hooks/useScrollAnimationOptions';
import InfoData from '@database/info';
import { companyMission, companyVision } from '@data/company-content';
import '@styles/about/about-section.scss';

interface AboutSectionProps {
	showHeader?: boolean;
}

export const AboutSection = ({ showHeader = true }: AboutSectionProps) => {
	const sectionRef = useScrollAnimation({
		animations: [
			{
				selector: '.about-fade',
				animation: {
					opacity: [0, 1],
					translateY: [60, 0],
					duration: 900,
					easing: 'easeOutQuart',
					staggerDelay: 150,
				},
			},
		],
		observer: { threshold: 0.2, rootMargin: '0px 0px -80px 0px' },
		onlyScrollDown: false,
	});

	return (
		<section id="nosotros" className={`about-section ${showHeader ? '' : 'about-section--embedded'}`} ref={sectionRef}>
			{showHeader && (
				<div className="about-section__header about-fade">
					<p className="about-section__eyebrow">Compañía</p>
					<h2 className="about-section__title">Somos {InfoData.brandName}</h2>
					<p className="about-section__intro">
						No vendemos software genérico. Escuchamos tu negocio y construimos lo que realmente necesitas.
					</p>
				</div>
			)}

			<div className="about-section__cards">
				<article id="mision" className="about-section__card about-fade">
					<h3 className="about-section__card-title">Misión</h3>
					<p className="about-section__card-text">{companyMission}</p>
				</article>
				<article id="vision" className="about-section__card about-fade">
					<h3 className="about-section__card-title">Visión</h3>
					<p className="about-section__card-text">{companyVision}</p>
				</article>
			</div>

			<div className="about-section__placeholders">
				<article id="equipo" className="about-section__placeholder about-fade">
					<h3>Equipo</h3>
					<p>Pronto vas a conocer a las personas que hacen posible cada proyecto.</p>
				</article>
				<article id="carreras" className="about-section__placeholder about-fade">
					<h3>Carreras</h3>
					<p>Estamos armando oportunidades para quienes quieren construir tecnología con propósito.</p>
				</article>
			</div>
		</section>
	);
};
