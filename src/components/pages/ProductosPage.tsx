import { PageHero } from '@components/layout/PageHero';
import { ProductsSection } from '@components/products/ProductsSection';
import { Footer } from '@components/Footer';

export const ProductosPage = () => (
	<main>
		<PageHero
			eyebrow="Productos"
			title="Software que ya resolvemos"
			subtitle="Productos propios de NIYVAL para industrias específicas. Probados en operaciones reales."
		/>
		<ProductsSection showHeader={false} />
		<Footer />
	</main>
);
