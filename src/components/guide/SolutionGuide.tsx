import { useScrollAnimation } from '@hooks/useScrollAnimationOptions';
import '@styles/guide/solution-guide.scss';

interface GuideStep {
	number: string;
	title: string;
	description: string;
}

const steps: GuideStep[] = [
	{
		number: '01',
		title: 'Entendemos tu negocio',
		description:
			'Antes de escribir una línea de código, escuchamos. ¿Cuál es el proceso que más te duele?',
	},
	{
		number: '02',
		title: 'Diseñamos la arquitectura',
		description:
			'Definimos la solución técnica más eficiente para tu contexto, presupuesto y equipo.',
	},
	{
		number: '03',
		title: 'Construimos juntos',
		description:
			'Iteraciones cortas y retroalimentación constante. Ves el avance cada semana.',
	},
	{
		number: '04',
		title: 'Acompañamos el crecimiento',
		description:
			'El software que entregamos no es el final. Es el comienzo de una relación.',
	},
];

export const SolutionGuide = ({ showHeader = true }: { showHeader?: boolean }) => {
	const sectionRef = useScrollAnimation({
		animations: [
			{
				selector: '.guide-fade',
				animation: {
					opacity: [0, 1],
					translateY: [50, 0],
					duration: 800,
					easing: 'easeOutQuart',
					staggerDelay: 120,
				},
			},
		],
		observer: { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
		onlyScrollDown: false,
	});

	return (
		<section id="guia" className={`solution-guide ${showHeader ? '' : 'solution-guide--embedded'}`} ref={sectionRef}>
			{showHeader && (
				<div className="solution-guide__header guide-fade">
					<p className="solution-guide__eyebrow">Proceso</p>
					<h2 className="solution-guide__title">¿Cómo elegir la solución correcta?</h2>
					<p className="solution-guide__subtitle">
						No necesitas ser experto en tecnología. Nosotros te guiamos en cada paso.
					</p>
				</div>
			)}

			<ol className="solution-guide__steps">
				{steps.map((step, index) => (
					<li key={step.number} className="solution-guide__step guide-fade">
						<div className="solution-guide__step-marker">
							<span className="solution-guide__number">{step.number}</span>
							{index < steps.length - 1 && <span className="solution-guide__connector" aria-hidden="true" />}
						</div>
						<div className="solution-guide__step-content">
							<h3 className="solution-guide__step-title">{step.title}</h3>
							<p className="solution-guide__step-desc">{step.description}</p>
						</div>
					</li>
				))}
			</ol>
		</section>
	);
};
