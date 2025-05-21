// Icons
import { Email } from '@assets/icons/email';
import { Linkedin } from '@assets/icons/linkedIn';
import { Instagram } from '@assets/icons/instagram';
// Components
import CopyEmail from '@components/functions/copyText';
import NotificationToaster from '@components/notifications';
// Styles
import '@styles/hero/detailsInfo.scss';
// Database
import InfoData from '@database/info';

export const DetailsInfo = () => {
    const { email, linkedin, instagram } = InfoData.contactRed;

    return (
        <>
            <NotificationToaster />
            <div className="container_info">
                <article>
                    <p className="name_company">
                        Nival
                    </p>
                    <p className="name_slogan">
                        Chasing balance
                    </p>
                    <p className="description">
                        Desarrollamos soluciones de software como servicio (SaaS) adaptadas a las necesidades de tu negocio.
                    </p>
                    <p className="ubication">Bogotá D.C</p>
                </article>

                <div className="container_infoNetwork">
                    <CopyEmail text={email} subject="Email" Icon={<Email colorPrimary="#22266e" />}>
                        <Email colorPrimary="#22266e" width="30" height="30" />
                    </CopyEmail>

                    <a
                        href={linkedin}
                        target="_blank"
                        className="btn_linkedIn"
                        rel="noreferrer"
                        aria-label="Ir a la pagina linkedin"
                    >
                        <Linkedin colorPrimary="#22266e" width="30" height="30" />
                    </a>

                    <a
                        href={instagram}
                        target="_blank"
                        className="btn_instagram"
                        rel="noreferrer"
                        aria-label="Ir a la pagina instagram"
                    >
                        <Instagram colorPrimary="#22266e" width="30" height="30" />
                    </a>
                </div>
            </div>
        </>
    );
};
