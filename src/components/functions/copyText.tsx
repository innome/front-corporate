import type { ReactNode } from "react";
import { toast } from 'sonner';

import '@styles/functions/copyText.scss';
import { Email } from "@assets/icons/email";

interface Props {
    text: string;
    subject: string;
    children: ReactNode
}

const CopyText = ({ text, subject, children }: Props) => {

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success(`¡${subject} copiado!`, {
                icon: <Email colorPrimary="#0B486B" />,
                closeButton: true,
                duration: Infinity,
            });
        } catch (err) {
            toast.error(`Error al copiar el ${subject}`, {
                icon: '⚠️',
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
