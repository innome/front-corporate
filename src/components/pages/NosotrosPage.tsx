import InfoData from '@database/info';
import { PageHero } from '@components/layout/PageHero';
import { AboutSection } from '@components/about/AboutSection';
import { Footer } from '@components/Footer';

export const NosotrosPage = () => (
	<main>
		<PageHero
			eyebrow="Compañía"
			title={`Somos ${InfoData.brandName}`}
			subtitle="No vendemos software genérico. Escuchamos tu negocio y construimos lo que realmente necesitas."
		/>
		<AboutSection showHeader={false} />
		<Footer />
	</main>
);
