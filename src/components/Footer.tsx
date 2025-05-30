// Icons
import { Logo } from '@assets/logo';
import { Email } from '@assets/icons/email';
import { Linkedin } from '@assets/icons/linkedIn';
import { Instagram } from '@assets/icons/instagram';
// Styles
import '@styles/footer.scss';
// Components
import CopyEmail from '@components/functions/CopyText';
import NotificationToaster from '@components/Notifications';
import { useTheme } from '@contexts/ThemeContext';
// Database
import InfoData from '@database/info';

export const Footer = () => {
	const { currentTheme } = useTheme();
	const { email, linkedin, instagram } = InfoData.contactRed;

	// Color del icono dependiendo del tema
    const getIconColor = () => {
        switch (currentTheme) {
            case 'blue':
                return '#22266e';
            case 'gray':
                return '#212230';
            case 'white':
                return '#ffffff';
            default:
                return '#ffffff';
        }
    };

	return (
		<footer className='container-footer'>
			<NotificationToaster />
			<div className='container-footer-presentation'>
				<picture className='logo-footer'>
					<Logo />
				</picture>
				<article className='container-names'>
					<p className="name_company">Nival</p>
					<p className="name_slogan">Chasing balance</p>
				</article>
			</div>
			<div className='container-footer-detailsInfo'>
				<p className='footer-subtitle'>
					Desarrollamos soluciones de software como servicio (SaaS) adaptadas a las necesidades de tu negocio.
				</p>
				<div className='footer-links'>
					<CopyEmail text={email} subject="Email" Icon={<Email colorPrimary={getIconColor()} />}>
						<Email colorPrimary={getIconColor()} width="30" height="30" />
					</CopyEmail>

					<a
						href={linkedin}
						target="_blank"
						className="btn_link btn_linkedIn"
						rel="noreferrer"
						aria-label="Ir a la pagina linkedin"
					>
						<Linkedin colorPrimary={getIconColor()} width="30" height="30" />
					</a>

					<a
						href={instagram}
						target="_blank"
						className="btn_link btn_instagram"
						rel="noreferrer"
						aria-label="Ir a la pagina instagram"
					>
						<Instagram colorPrimary={getIconColor()} width="30" height="30" />
					</a>
				</div>
			</div>
			<p className='footer-copyright'>
				&copy; {new Date().getFullYear()} Nival. Todos los derechos reservados.
			</p>
		</footer>
	);
};
