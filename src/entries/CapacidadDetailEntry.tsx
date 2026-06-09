import { AppWrapper } from '@components/AppWrapper';
import { PageDetail } from '@components/layout/PageDetail';
import type { PageContent } from '@data/pages-content';
import { ROUTES } from '@components/navbar/nav-data';

interface CapacidadDetailEntryProps {
	content: PageContent;
}

export const CapacidadDetailEntry = ({ content }: CapacidadDetailEntryProps) => (
	<AppWrapper defaultTheme="white">
		<PageDetail content={content} backHref={ROUTES.capacidades} backLabel="Todas las capacidades" />
	</AppWrapper>
);
