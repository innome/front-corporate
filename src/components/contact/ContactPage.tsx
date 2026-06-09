import { PageHero } from '@components/layout/PageHero';
import { ContactForm } from '@components/contact/ContactForm';
import { Footer } from '@components/Footer';
import NotificationToaster from '@components/Notifications';
import InfoData from '@database/info';
import '@styles/contact/contact-form.scss';

export const ContactPage = () => {
	const { email } = InfoData.contactRed;

	return (
		<main className="contact-page">
			<NotificationToaster />
			<PageHero
				eyebrow="Contacto"
				title="Cuéntanos tu proyecto"
				subtitle="Completa el formulario y te respondemos en menos de 24 horas hábiles. Sin compromiso."
			/>

			<div className="contact-page__layout">
				<div className="contact-page__form-card">
					<ContactForm />
				</div>

				<aside className="contact-page__info">
					<div className="contact-page__info-card">
						<h3>Correo directo</h3>
						<p>
							¿Prefieres escribirnos tú?{' '}
							<a href={`mailto:${email}`}>{email}</a>
						</p>
					</div>
					<div className="contact-page__info-card">
						<h3>Qué incluir</h3>
						<p>
							Cuéntanos qué proceso te duele hoy, qué herramientas usas y qué resultado esperas.
							Con eso nos alcanza para una primera charla útil.
						</p>
					</div>
					<div className="contact-page__info-card">
						<h3>Ubicación</h3>
						<p>Colombia · Atendemos clientes en toda Latinoamérica</p>
					</div>
				</aside>
			</div>

			<Footer />
		</main>
	);
};
