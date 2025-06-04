// Icons
import { Email } from '@assets/icons/email';
import { Linkedin } from '@assets/icons/linkedIn';
import { Instagram } from '@assets/icons/instagram';
// Styles
import '@styles/footer.scss';
// Components
import { CopyText } from '@components/functions/CopyText';
import NotificationToaster from '@components/Notifications';
// Hooks
import { useThemeColors } from '@hooks/useThemeColors';
// Database
import InfoData from '@database/info';

export const Footer = () => {
	const { email, linkedin, instagram } = InfoData.contactRed;
	const theme = useThemeColors();

	return (
		<footer className='container-footer'>
			<NotificationToaster />
			<div className='container-footer-detailsInfo'>
				<h3 className='footer-title'>
					¿Tienes un proyecto en mente o quieres saber cómo podemos ayudarte?
				</h3>
				<p className='footer-subtitle'>
					Escríbenos a nuestro orreo electrónico.
					Nuestro equipo está listo para atenderte y ofrecerte asesoría personalizada acorde a tus necesidades y objetivos.
				</p>
				<div className='footer-links'>
					<CopyText text={email} subject="Email" Icon={<Email colorPrimary={theme.secondary} />}>
						<Email className='btn_link' colorPrimary={theme.secondary} width="30" height="30" />
					</CopyText>

					{/* <a
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
					</a> */}
				</div>
			</div>
			<p className='footer-copyright'>
				&copy; 2025 Nival. Todos los derechos reservados.
			</p>
		</footer>
	);
};
