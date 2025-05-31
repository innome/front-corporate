import type { ReactElement, ReactNode } from "react";
import { toast } from 'sonner';
// Icons
import { Alert } from "@assets/icons/alert";
// Hooks
import { useThemeColors } from '@hooks/useThemeColors';
// Styles
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
        try {
            await navigator.clipboard.writeText(text);
            toast.success(`¡${subject} copiado!`, {
                icon: Icon,
                // closeButton: true,
                // duration: Infinity,
                style: {
                    fontSize: '1.6rem',
                    fontWeight: 'bold',
                    color: theme.secondary,
                    backgroundColor: theme.primary,
                    border: `1px solid ${theme.secondary}`,
                }
            });
        } catch (err) {
            toast.warning(`¡Error al copiar el ${subject}!`, {
                icon: <Alert colorPrimary={theme.secondary} />,
                // duration: Infinity,
                style: {
                    fontSize: '1.6rem',
                    fontWeight: 'bold',
                    color: theme.secondary,
                    backgroundColor: theme.primary,
                    border: `1px solid ${theme.secondary}`,
                }
            });
            console.error(err);
        }
    };

    return (
        <>
            <button onClick={handleCopy} className="btn_CopyText">
                {children}
            </button>
        </>
    );
};
