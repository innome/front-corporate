import { AppWrapper } from '@components/AppWrapper';
import { PageDetail } from '@components/layout/PageDetail';
import type { PageContent } from '@data/pages-content';
import { ROUTES } from '@components/navbar/nav-data';

interface SolucionDetailEntryProps {
	content: PageContent;
}

export const SolucionDetailEntry = ({ content }: SolucionDetailEntryProps) => (
	<AppWrapper defaultTheme="white">
		<PageDetail content={content} backHref={ROUTES.soluciones} backLabel="Todas las soluciones" />
	</AppWrapper>
);
