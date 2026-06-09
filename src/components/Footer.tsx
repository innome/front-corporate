// Icons
import { Email } from '@assets/icons/email';
// Styles
import '@styles/footer.scss';
// Components
import { CopyText } from '@components/functions/CopyText';
import NotificationToaster from '@components/Notifications';
import { footerNavGroups, ROUTES } from '@components/navbar/nav-data';
// Hooks
import { useThemeColors } from '@hooks/useThemeColors';
import InfoData from '@database/info';

export const Footer = () => {
	const { email } = InfoData.contactRed;
	const { brandName } = InfoData;
	const theme = useThemeColors();

	return (
		<footer className='container-footer'>
			<NotificationToaster />
			<div className='container-footer-detailsInfo'>
				<h3 className='footer-title'>
					¿Tienes un proyecto en mente o quieres saber cómo podemos ayudarte?
				</h3>
				<p className='footer-subtitle'>
					Completa el formulario de contacto o escríbenos directamente.
				</p>
				<div className='footer-links'>
					<a href={ROUTES.contacto} className="footer-form-link">
						Ir al formulario de contacto
					</a>
					<a href={`mailto:${email}`} className="footer-email-link">
						{email}
					</a>
					<CopyText text={email} subject="Correo" Icon={<Email colorPrimary={theme.secondary} />}>
						<Email className='btn_link' colorPrimary={theme.secondary} width="30" height="30" />
					</CopyText>
				</div>
			</div>

			<nav className="footer-nav" aria-label="Enlaces del sitio">
				{footerNavGroups.map((group) => (
					<div key={group.title} className="footer-nav__group">
						<h4 className="footer-nav__title">{group.title}</h4>
						<ul className="footer-nav__list">
							{group.links.map((link) => (
								<li key={link.label}>
									<a href={link.href}>{link.label}</a>
								</li>
							))}
						</ul>
					</div>
				))}
				<div className="footer-nav__group">
					<h4 className="footer-nav__title">Contacto</h4>
					<ul className="footer-nav__list">
						<li>
							<a href={ROUTES.contacto}>Formulario de contacto</a>
						</li>
						<li>
							<a href={`mailto:${email}`}>{email}</a>
						</li>
					</ul>
				</div>
			</nav>

			<p className='footer-copyright'>
				&copy; 2025 {brandName}. Todos los derechos reservados.
			</p>
		</footer>
	);
};
