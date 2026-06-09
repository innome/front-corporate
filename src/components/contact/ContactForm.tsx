import { useEffect, useState, type FormEvent } from 'react';
import InfoData from '@database/info';
import '@styles/contact/contact-form.scss';

interface ContactFormData {
	name: string;
	email: string;
	company: string;
	message: string;
}

const initialForm: ContactFormData = {
	name: '',
	email: '',
	company: '',
	message: '',
};

const CONTACT_EMAIL = InfoData.contactRed.email;
const FORM_ACTION = `https://formsubmit.co/${CONTACT_EMAIL}`;

export const ContactForm = () => {
	const [formData, setFormData] = useState<ContactFormData>(initialForm);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [nextUrl, setNextUrl] = useState('');

	useEffect(() => {
		setNextUrl(`${window.location.origin}/contacto?enviado=1`);
	}, []);

	const handleChange = (field: keyof ContactFormData, value: string) => {
		setFormData((current) => ({ ...current, [field]: value }));
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		const form = event.currentTarget;
		const subjectField = form.elements.namedItem('_subject') as HTMLInputElement | null;

		if (subjectField) {
			subjectField.value = `Nuevo contacto web ${InfoData.brandName} — ${formData.name}`;
		}

		setIsSubmitting(true);
	};

	const isFormReady = nextUrl.length > 0;

	return (
		<form
			className="contact-form"
			action={FORM_ACTION}
			method="POST"
			onSubmit={handleSubmit}
			noValidate
		>
			<input type="hidden" name="_next" value={nextUrl} />
			<input type="hidden" name="_captcha" value="false" />
			<input type="hidden" name="_template" value="table" />
			<input type="hidden" name="_subject" value={`Nuevo contacto web ${InfoData.brandName}`} />
			<input type="text" name="_honey" className="contact-form__honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

			<div className="contact-form__grid">
				<div className="contact-form__field">
					<label htmlFor="contact-name">Nombre *</label>
					<input
						id="contact-name"
						type="text"
						name="name"
						required
						value={formData.name}
						onChange={(e) => handleChange('name', e.target.value)}
						placeholder="Tu nombre"
						autoComplete="name"
					/>
				</div>
				<div className="contact-form__field">
					<label htmlFor="contact-email">Correo electrónico *</label>
					<input
						id="contact-email"
						type="email"
						name="email"
						required
						value={formData.email}
						onChange={(e) => handleChange('email', e.target.value)}
						placeholder="tu@empresa.com"
						autoComplete="email"
					/>
				</div>
				<div className="contact-form__field contact-form__field--full">
					<label htmlFor="contact-company">Empresa</label>
					<input
						id="contact-company"
						type="text"
						name="company"
						value={formData.company}
						onChange={(e) => handleChange('company', e.target.value)}
						placeholder="Nombre de tu empresa"
						autoComplete="organization"
					/>
				</div>
				<div className="contact-form__field contact-form__field--full">
					<label htmlFor="contact-message">Mensaje *</label>
					<textarea
						id="contact-message"
						name="message"
						required
						rows={5}
						value={formData.message}
						onChange={(e) => handleChange('message', e.target.value)}
						placeholder="Cuéntanos qué proceso quieres mejorar o qué proyecto tienes en mente..."
					/>
				</div>
			</div>
			<p className="contact-form__note">
				Tu mensaje llega a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
			</p>
			<button type="submit" className="contact-form__submit" disabled={isSubmitting || !isFormReady}>
				{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
			</button>
		</form>
	);
};
