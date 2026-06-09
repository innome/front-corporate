import { PageHero } from '@components/layout/PageHero';
import { CasesSection } from '@components/cases/CasesSection';
import { Footer } from '@components/Footer';

export const CasosPage = () => (
	<main>
		<PageHero
			eyebrow="Casos de éxito"
			title="Clientes que confían en nosotros"
			subtitle="Integraciones, plataformas a medida y automatización con impacto medible en varios países."
		/>
		<CasesSection showHeader={false} />
		<Footer />
	</main>
);
