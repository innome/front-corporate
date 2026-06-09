import { useScrollAnimation } from '@hooks/useScrollAnimationOptions';
import { products } from '@data/company-content';
import '@styles/products/products-section.scss';

interface ProductsSectionProps {
	showHeader?: boolean;
}

export const ProductsSection = ({ showHeader = true }: ProductsSectionProps) => {
	const sectionRef = useScrollAnimation({
		animations: [
			{
				selector: '.products-fade',
				animation: {
					opacity: [0, 1],
					translateY: [50, 0],
					duration: 800,
					easing: 'easeOutQuart',
					staggerDelay: 120,
				},
			},
		],
		observer: { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
		onlyScrollDown: false,
	});

	return (
		<section id="productos" className={`products-section ${showHeader ? '' : 'products-section--embedded'}`} ref={sectionRef}>
			{showHeader && (
				<div className="products-section__header products-fade">
					<p className="products-section__eyebrow">Productos</p>
					<h2 className="products-section__title">Software listo para usar</h2>
					<p className="products-section__subtitle">
						Además de soluciones a medida, desarrollamos productos propios para industrias concretas.
					</p>
				</div>
			)}

			<div className="products-section__grid">
				{products.map((product) => (
					<article
						key={product.id}
						id={product.id}
						className={`products-section__card products-fade ${product.isFeatured ? 'products-section__card--featured' : ''}`}
					>
						{product.isFeatured && <span className="products-section__badge">Producto estrella</span>}
						<h3 className="products-section__card-name">{product.name}</h3>
						<p className="products-section__card-tagline">{product.tagline}</p>
						<p className="products-section__card-desc">{product.description}</p>
						<p className="products-section__card-audience">{product.audience}</p>
						{product.href ? (
							<a
								href={product.href}
								className="products-section__link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Conocer {product.name}
							</a>
						) : (
							<a href="/contacto" className="products-section__link products-section__link--secondary">
								Consúltanos
							</a>
						)}
					</article>
				))}
			</div>
		</section>
	);
};
