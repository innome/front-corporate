import { PageHero } from '@components/layout/PageHero';
import { SolutionGuide } from '@components/guide/SolutionGuide';
import { Footer } from '@components/Footer';

export const ProcesoPage = () => (
	<main>
		<PageHero
			eyebrow="Proceso"
			title="¿Cómo elegir la solución correcta?"
			subtitle="No necesitas ser experto en tecnología. Te guiamos en cada paso."
		/>
		<SolutionGuide showHeader={false} />
		<Footer />
	</main>
);
