export interface PageContent {
	slug: string;
	title: string;
	category: string;
	tagline: string;
	description: string;
	benefits: string[];
	ctaLabel?: string;
}

export const solucionesPages: PageContent[] = [
	{
		slug: 'software-a-la-medida',
		title: 'Software a la medida',
		category: 'Soluciones digitales',
		tagline: 'No adaptas tu negocio al software. El software se adapta a ti.',
		description:
			'Diseñamos sistemas que encajan con tu operación real. Sin módulos de más ni procesos forzados.',
		benefits: [
			'Reduces costos operativos desde el primer mes',
			'Escalas sin rehacer todo cada año',
			'Tu equipo trabaja con herramientas que entiende',
			'Integración con lo que ya usas hoy',
		],
	},
	{
		slug: 'automatizacion-procesos',
		title: 'Automatización de procesos',
		category: 'Soluciones digitales',
		tagline: 'Libera a tu equipo de las tareas repetitivas.',
		description:
			'Identificamos cuellos de botella y los resolvemos con flujos automáticos que funcionan todo el día.',
		benefits: [
			'Eliminas errores humanos en procesos clave',
			'Liberas horas de trabajo manual cada semana',
			'Reportes listos sin esperar al fin de mes',
			'Retorno de inversión visible en semanas, no en años',
		],
	},
	{
		slug: 'plataformas-saas',
		title: 'Plataformas SaaS',
		category: 'Soluciones digitales',
		tagline: 'Tu producto digital, listo para escalar.',
		description:
			'Construimos plataformas multiusuario con suscripciones, roles e indicadores desde el diseño.',
		benefits: [
			'Lanzas más rápido al mercado',
			'Modelo de ingresos recurrentes',
			'Infraestructura preparada para crecer',
			'Experiencia de usuario consistente',
		],
	},
	{
		slug: 'tercerizacion-estrategica',
		title: 'Tercerización estratégica',
		category: 'Soluciones',
		tagline: 'Tu equipo de tecnología, sin los costos de tenerlo en casa.',
		description:
			'Sumamos capacidad técnica cuando la necesitas. Tú te enfocas en el negocio, nosotros en construir.',
		benefits: [
			'Accedes a talento senior bajo demanda',
			'Predices costos mes a mes',
			'Aceleras proyectos sin contratar',
			'Transferimos conocimiento a tu equipo',
		],
	},
	{
		slug: 'consultoria-tecnologica',
		title: 'Consultoría tecnológica',
		category: 'Transformación digital',
		tagline: 'Claridad antes de invertir un peso en tecnología.',
		description:
			'Te ayudamos a entender qué necesitas, qué no, y cuál es el camino más eficiente para tu contexto.',
		benefits: [
			'Evitas comprar herramientas que no usas',
			'Hoja de ruta clara con prioridades reales',
			'Decisiones basadas en tu operación',
			'Alineación entre negocio y tecnología',
		],
	},
	{
		slug: 'arquitectura-sistemas',
		title: 'Arquitectura de sistemas',
		category: 'Transformación digital',
		tagline: 'Bases sólidas para que tu software no se caiga al crecer.',
		description:
			'Diseñamos arquitecturas mantenibles, seguras y preparadas para el volumen que viene.',
		benefits: [
			'Menos deuda técnica a futuro',
			'Sistemas modulares y extensibles',
			'Documentación que tu equipo entiende',
			'Integraciones planificadas desde el inicio',
		],
	},
	{
		slug: 'migracion-cloud',
		title: 'Migración a la nube',
		category: 'Transformación digital',
		tagline: 'Moderniza sin frenar el negocio.',
		description:
			'Migramos tus sistemas a la nube con un plan por fases que reduce riesgos y tiempo de inactividad.',
		benefits: [
			'Reduces costos de infraestructura',
			'Mayor disponibilidad y respaldo',
			'Escalado automático cuando lo necesitas',
			'Transición gradual sin sorpresas',
		],
	},
	{
		slug: 'business-intelligence',
		title: 'Inteligencia de negocios',
		category: 'Analítica y datos',
		tagline: 'Decisiones con datos reales, no con corazonadas.',
		description:
			'Convertimos tus datos dispersos en información clara para que elijas con confianza.',
		benefits: [
			'Indicadores clave visibles en tiempo real',
			'Menos reuniones para entender qué pasa',
			'Detección temprana de problemas',
			'Reportes que todo el mundo entiende',
		],
	},
	{
		slug: 'data-engineering',
		title: 'Ingeniería de datos',
		category: 'Analítica y datos',
		tagline: 'Flujos de datos confiables en los que puedes confiar.',
		description:
			'Construimos la infraestructura de datos que alimenta tus reportes, tableros y modelos.',
		benefits: [
			'Datos limpios y consistentes',
			'Automatización de extracción y carga',
			'Menos errores en reportes críticos',
			'Base lista para analítica avanzada',
		],
	},
	{
		slug: 'dashboards-ejecutivos',
		title: 'Tableros ejecutivos',
		category: 'Analítica y datos',
		tagline: 'Lo importante, en un solo vistazo.',
		description:
			'Diseñamos tableros ejecutivos que responden las preguntas que de verdad importan al negocio.',
		benefits: [
			'Decisiones más rápidas en la dirección',
			'Métricas alineadas con tus objetivos',
			'Acceso desde cualquier dispositivo',
			'Actualización automática de datos',
		],
	},
];

export const capacidadesPages: PageContent[] = [
	{
		slug: 'integraciones-api',
		title: 'Integraciones API',
		category: 'Capacidades',
		tagline: 'Conecta las herramientas que ya usas.',
		description:
			'Unificamos ERPs, CRMs, pasarelas de pago y herramientas internas en flujos coherentes.',
		benefits: [
			'Menos digitación doble',
			'Datos sincronizados',
			'Procesos de punta a punta',
			'Monitoreo de integraciones',
		],
	},
	{
		slug: 'seguridad-compliance',
		title: 'Seguridad y cumplimiento',
		category: 'Capacidades',
		tagline: 'Protección desde el diseño, no como parche.',
		description:
			'Aplicamos buenas prácticas de seguridad y cumplimiento según tu industria y regulación.',
		benefits: [
			'Control de accesos y roles',
			'Auditoría y trazabilidad',
			'Cifrado de datos sensibles',
			'Cumplimiento normativo',
		],
	},
	{
		slug: 'automatizacion-ia',
		title: 'Automatización con IA',
		category: 'Capacidades',
		tagline: 'Inteligencia donde de verdad suma.',
		description:
			'Implementamos IA práctica: clasificación, extracción de datos, asistentes internos y más.',
		benefits: [
			'Menos trabajo manual repetitivo',
			'Respuestas más rápidas',
			'Escalabilidad operativa',
			'Casos de uso medibles',
		],
	},
	{
		slug: 'gestion-datos',
		title: 'Gestión de datos',
		category: 'Capacidades',
		tagline: 'Información ordenada y lista para usar.',
		description:
			'Estructuramos, limpiamos y gobernamos tus datos para que sean un activo del negocio.',
		benefits: [
			'Una sola fuente de verdad',
			'Calidad de datos',
			'Catálogos y diccionarios',
			'Acceso controlado',
		],
	},
	{
		slug: 'desarrollo-cloud-native',
		title: 'Desarrollo cloud native',
		category: 'Capacidades',
		tagline: 'Escalable desde el primer día.',
		description:
			'Construimos con contenedores, CI/CD y arquitecturas listas para la nube, para crecer sin fricción.',
		benefits: [
			'Despliegues automatizados',
			'Alta disponibilidad',
			'Escalado bajo demanda',
			'Monitoreo integrado',
		],
	},
];

export function getSolucionBySlug(slug: string): PageContent | undefined {
	return solucionesPages.find((page) => page.slug === slug);
}

export function getCapacidadBySlug(slug: string): PageContent | undefined {
	return capacidadesPages.find((page) => page.slug === slug);
}
