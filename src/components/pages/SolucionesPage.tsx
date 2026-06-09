import { PageHero } from '@components/layout/PageHero';
import { SolutionsSection } from '@components/solutions/SolutionsSection';
import { Footer } from '@components/Footer';

export const SolucionesPage = () => (
	<main>
		<PageHero
			eyebrow="Soluciones"
			title="¿Qué podemos hacer por vos?"
			subtitle="Elige una solución o explora cada servicio en detalle desde el menú."
		/>
		<SolutionsSection showHeader={false} />
		<Footer />
	</main>
);
