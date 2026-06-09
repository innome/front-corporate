import type { ReactElement, ReactNode } from 'react';
import { toast } from 'sonner';
import { Alert } from '@assets/icons/alert';
import { useThemeColors } from '@hooks/useThemeColors';
import { copyToClipboard } from '@utils/copy-to-clipboard';
import '@styles/functions/copy-text.scss';

interface Props {
	text: string;
	subject: string;
	children: ReactNode;
	Icon: ReactElement;
}

export const CopyText = ({ text, subject, children, Icon }: Props) => {
	const theme = useThemeColors();

	const handleCopy = async () => {
		const didCopy = await copyToClipboard(text);

		if (didCopy) {
			toast.success(`¡${subject} copiado al portapapeles!`, {
				icon: Icon,
				style: {
					fontSize: '1.6rem',
					fontWeight: 'bold',
					color: theme.secondary,
					backgroundColor: theme.primary,
					border: `1px solid ${theme.secondary}`,
				},
			});
			return;
		}

		toast.warning(`No pudimos copiar el ${subject.toLowerCase()}. Usa el enlace de correo.`, {
			icon: <Alert colorPrimary={theme.secondary} />,
			style: {
				fontSize: '1.6rem',
				fontWeight: 'bold',
				color: theme.secondary,
				backgroundColor: theme.primary,
				border: `1px solid ${theme.secondary}`,
			},
		});
	};

	return (
		<button type="button" onClick={handleCopy} className="btn_CopyText" aria-label={`Copiar ${subject.toLowerCase()}`}>
			{children}
		</button>
	);
};
