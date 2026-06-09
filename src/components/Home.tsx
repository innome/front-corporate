import InfoData from '@database/info';
import { HeroSection } from './hero/HeroSection';
import { Footer } from './Footer';
import { homeQuickLinks, ROUTES } from '@components/navbar/nav-data';
import { useScrollAnimation } from '@hooks/useScrollAnimationOptions';
import '@styles/home/home-landing.scss';
import '@styles/shared/cta-button.scss';

export const Home = () => {
	const sectionRef = useScrollAnimation({
		animations: [
			{
				selector: '.home-link-fade',
				animation: {
					opacity: [0, 1],
					translateY: [40, 0],
					duration: 800,
					easing: 'easeOutQuart',
					staggerDelay: 100,
				},
			},
		],
		observer: { threshold: 0.1 },
		onlyScrollDown: false,
	});

	return (
		<main>
			<HeroSection />

			<section className="home-links" ref={sectionRef}>
				<div className="home-links__header home-link-fade">
					<h2>Explora {InfoData.brandName}</h2>
					<p>Cada sección tiene su propia página para que la revises con calma.</p>
				</div>
				<div className="home-links__grid">
					{homeQuickLinks.map((link) => (
						<a key={link.href} href={link.href} className="home-links__card home-link-fade">
							<h3>{link.label}</h3>
							<p>{link.description}</p>
							<span className="home-links__arrow">Ver más →</span>
						</a>
					))}
				</div>
				<div className="home-links__cta home-link-fade">
					<a href={ROUTES.contacto} className="nival-cta nival-cta--primary">
						Contáctanos
					</a>
				</div>
			</section>

			<Footer />
		</main>
	);
};
