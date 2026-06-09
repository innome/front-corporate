import { PageHero } from '@components/layout/PageHero';
import { Footer } from '@components/Footer';
import { capacidadesPages } from '@data/pages-content';
import { ROUTES } from '@components/navbar/nav-data';
import { useScrollAnimation } from '@hooks/useScrollAnimationOptions';
import '@styles/pages/overview-grid.scss';

export const CapacidadesPage = () => {
	const sectionRef = useScrollAnimation({
		animations: [
			{
				selector: '.overview-fade',
				animation: {
					opacity: [0, 1],
					translateY: [40, 0],
					duration: 800,
					staggerDelay: 80,
				},
			},
		],
		observer: { threshold: 0.1 },
		onlyScrollDown: false,
	});

	return (
		<main>
			<PageHero
				eyebrow="Capacidades"
				title="Cómo lo hacemos posible"
				subtitle="Tecnologías y enfoques que usamos en cada proyecto."
			/>
			<section className="overview-grid" ref={sectionRef}>
				{capacidadesPages.map((item) => (
					<a
						key={item.slug}
						href={`${ROUTES.capacidades}/${item.slug}`}
						className="overview-grid__card overview-fade"
					>
						<span className="overview-grid__category">{item.category}</span>
						<h2>{item.title}</h2>
						<p>{item.tagline}</p>
						<span className="overview-grid__link">Ver detalle →</span>
					</a>
				))}
			</section>
			<Footer />
		</main>
	);
};
