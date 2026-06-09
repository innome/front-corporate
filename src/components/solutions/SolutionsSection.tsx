import { useState } from 'react';
import { Screen } from '@assets/screen';
import { Gears } from '@assets/gears';
import { useThemeColors } from '@hooks/useThemeColors';
import { useScrollAnimation } from '@hooks/useScrollAnimationOptions';
import { ROUTES } from '@components/navbar/nav-data';
import '@styles/solutions/solutions-section.scss';
import '@styles/shared/cta-button.scss';

interface SolutionBenefit {
	text: string;
}

interface SolutionTab {
	id: string;
	slug: string;
	label: string;
	tagline: string;
	description: string;
	benefits: SolutionBenefit[];
	Illustration: typeof Screen;
}

const solutionTabs: SolutionTab[] = [
	{
		id: 'software',
		slug: 'software-a-la-medida',
		label: 'Software a la medida',
		tagline: 'No adaptas tu negocio al software. El software se adapta a ti.',
		description:
			'Diseñamos sistemas que encajan con tu operación real. Sin módulos de más, sin procesos forzados.',
		benefits: [
			{ text: 'Reduces costos operativos desde el primer mes' },
			{ text: 'Escalas sin rehacer todo cada año' },
			{ text: 'Tu equipo trabaja con herramientas que entiende' },
			{ text: 'Integración con lo que ya usas hoy' },
		],
		Illustration: Screen,
	},
	{
		id: 'tercerizacion',
		slug: 'tercerizacion-estrategica',
		label: 'Tercerización estratégica',
		tagline: 'Tu equipo de tecnología, sin los costos de tenerlo en casa.',
		description:
			'Sumamos capacidad técnica cuando la necesitas. Tú te enfocas en el negocio, nosotros en construir.',
		benefits: [
			{ text: 'Accedes a talento senior bajo demanda' },
			{ text: 'Predices costos mes a mes' },
			{ text: 'Aceleras proyectos sin contratar' },
			{ text: 'Transferimos conocimiento a tu equipo' },
		],
		Illustration: Gears,
	},
	{
		id: 'automatizacion',
		slug: 'automatizacion-procesos',
		label: 'Automatización inteligente',
		tagline: 'Libera a tu equipo de las tareas repetitivas. Déjalas en manos de las máquinas.',
		description:
			'Identificamos cuellos de botella y los resolvemos con flujos automáticos que funcionan todo el día.',
		benefits: [
			{ text: 'Eliminas errores humanos en procesos clave' },
			{ text: 'Liberas horas de trabajo manual cada semana' },
			{ text: 'Reportes listos sin esperar al fin de mes' },
			{ text: 'Retorno de inversión visible en semanas, no en años' },
		],
		Illustration: Gears,
	},
];

const CheckIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
		<circle cx="10" cy="10" r="10" fill="var(--color-acrylic)" />
		<path d="M6 10l3 3 5-6" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

interface SolutionsSectionProps {
	showHeader?: boolean;
}

export const SolutionsSection = ({ showHeader = true }: SolutionsSectionProps) => {
	const [activeTabId, setActiveTabId] = useState(solutionTabs[0].id);
	const [mobileOpenId, setMobileOpenId] = useState<string | null>(solutionTabs[0].id);
	const theme = useThemeColors();
	const activeTab = solutionTabs.find((tab) => tab.id === activeTabId) ?? solutionTabs[0];

	const sectionRef = useScrollAnimation({
		animations: [
			{
				selector: '.solutions-fade',
				animation: {
					opacity: [0, 1],
					translateY: [60, 0],
					duration: 900,
					easing: 'easeOutQuart',
					staggerDelay: 120,
				},
			},
		],
		observer: { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
		onlyScrollDown: false,
	});

	const handleMobileToggle = (tabId: string) => {
		setMobileOpenId((current) => (current === tabId ? null : tabId));
		setActiveTabId(tabId);
	};

	const Illustration = activeTab.Illustration;

	return (
		<section id="soluciones" className={`solutions-section ${showHeader ? '' : 'solutions-section--embedded'}`} ref={sectionRef}>
			{showHeader && (
				<div className="solutions-section__header solutions-fade">
					<p className="solutions-section__eyebrow">Soluciones</p>
					<h2 className="solutions-section__title">¿Qué podemos hacer por ti?</h2>
					<p className="solutions-section__subtitle">
						Elige la opción que mejor se alinea con el momento de tu negocio.
					</p>
				</div>
			)}

			<div className="solutions-section__tabs solutions-fade" role="tablist" aria-label="Soluciones">
				{solutionTabs.map((tab) => (
					<button
						key={tab.id}
						type="button"
						role="tab"
						id={`solution-tab-${tab.id}`}
						aria-selected={activeTabId === tab.id}
						aria-controls={`solution-panel-${tab.id}`}
						className={`solutions-section__tab ${activeTabId === tab.id ? 'is-active' : ''}`}
						onClick={() => setActiveTabId(tab.id)}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div
				className="solutions-section__panel solutions-fade solutions-section__panel--desktop"
				role="tabpanel"
				id={`solution-panel-${activeTab.id}`}
				aria-labelledby={`solution-tab-${activeTab.id}`}
			>
				<div className="solutions-section__content">
					<p className="solutions-section__tagline">{activeTab.tagline}</p>
					<p className="solutions-section__description">{activeTab.description}</p>
					<ul className="solutions-section__benefits">
						{activeTab.benefits.map((benefit) => (
							<li key={benefit.text}>
								<CheckIcon />
								<span>{benefit.text}</span>
							</li>
						))}
					</ul>
					<div className="solutions-section__actions">
						<a href={`${ROUTES.soluciones}/${activeTab.slug}`} className="nival-cta nival-cta--secondary">
							Conocer más
						</a>
						<a href={ROUTES.contacto} className="nival-cta nival-cta--ghost">
							Contáctanos
						</a>
					</div>
				</div>
				<div className="solutions-section__illustration">
					<Illustration colorPrimary={theme.primary} />
				</div>
			</div>

			<div className="solutions-section__accordion">
				{solutionTabs.map((tab) => {
					const TabIllustration = tab.Illustration;
					const isOpen = mobileOpenId === tab.id;

					return (
						<div key={tab.id} className={`solutions-section__accordion-item ${isOpen ? 'is-open' : ''}`}>
							<button
								type="button"
								className="solutions-section__accordion-trigger"
								aria-expanded={isOpen}
								onClick={() => handleMobileToggle(tab.id)}
							>
								{tab.label}
							</button>
							{isOpen && (
								<div className="solutions-section__accordion-panel">
									<p className="solutions-section__tagline">{tab.tagline}</p>
									<p className="solutions-section__description">{tab.description}</p>
									<ul className="solutions-section__benefits">
										{tab.benefits.map((benefit) => (
											<li key={benefit.text}>
												<CheckIcon />
												<span>{benefit.text}</span>
											</li>
										))}
									</ul>
									<div className="solutions-section__illustration solutions-section__illustration--mobile">
										<TabIllustration colorPrimary={theme.primary} />
									</div>
									<div className="solutions-section__actions">
										<a href={`${ROUTES.soluciones}/${tab.slug}`} className="nival-cta nival-cta--secondary">
											Conocer más
										</a>
										<a href={ROUTES.contacto} className="nival-cta nival-cta--ghost">
											Contáctanos
										</a>
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
};
