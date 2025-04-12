import type { ReactElement, ReactNode } from "react";
import { toast } from 'sonner';
// Icons
import { Alert } from "@assets/icons/alert";
// Styles
import '@styles/functions/copyText.scss';

interface Props {
    text: string;
    subject: string;
    children: ReactNode;
    Icon: ReactElement;
}

const CopyText = ({ text, subject, children, Icon }: Props) => {

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success(`¡${subject} copiado!`, {
                icon: Icon,
                // closeButton: true,
                // duration: Infinity,
            });
        } catch (err) {
            toast.warning(`Error al copiar el ${subject}`, {
                icon: <Alert colorPrimary="#f0c005" />,
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

export default CopyText;
