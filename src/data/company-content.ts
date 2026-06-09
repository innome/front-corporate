export const companyMission =
	'Crear tecnología que simplifique procesos, impulse el crecimiento y genere valor sostenible para empresas de cualquier tamaño.';

export const companyVision =
	'Ser referentes en innovación tecnológica, creando soluciones que transformen organizaciones y generen un impacto sostenible.';

export interface ProductItem {
	id: string;
	name: string;
	tagline: string;
	description: string;
	audience: string;
	href?: string;
	isFeatured?: boolean;
}

export interface CaseStudyItem {
	id: string;
	client: string;
	region: string;
	industry: string;
	title: string;
	description: string;
	highlights: string[];
	logoSrc: string;
	logoAlt: string;
	website?: string;
}

export const products: ProductItem[] = [
	{
		id: 'punch-booking',
		name: 'Punch Booking',
		tagline: 'Reserva clases sin fricción',
		description:
			'Nuestro producto estrella para dojos, gyms de artes marciales y cualquier negocio que viva de agendar clases. Tus alumnos reservan en segundos; tú controlas cupos, horarios y pagos desde un solo lugar.',
		audience: 'Dojos, artes marciales, studios y centros de entrenamiento',
		href: 'https://punchbooking.com/',
		isFeatured: true,
	},
	{
		id: 'toth-admin',
		name: 'Toth Admin',
		tagline: 'Inventario y pedidos en una sola plataforma',
		description:
			'Plataforma instalable para llevar inventario al día y pedir directamente a tus proveedores. Menos planillas, menos llamadas y más control sobre lo que entra y sale de tu operación.',
		audience: 'Retail, distribución y operaciones con múltiples proveedores',
	},
	{
		id: 'fang',
		name: 'Fang',
		tagline: 'Agenda inteligente para profesionales',
		description:
			'Gestión de citas pensada para clínicas, consultorios y cualquier servicio que se agenda con un profesional. Organiza disponibilidad, recordatorios y la experiencia del paciente o cliente.',
		audience: 'Salud, bienestar y servicios profesionales con agenda',
	},
	{
		id: 'turpial',
		name: 'Turpial',
		tagline: 'Proveedores bajo control',
		description:
			'Solución desplegada en Venezuela para la gestión de proveedores de Farmatodo. Centraliza datos, seguimiento y decisiones cuando manejas relaciones comerciales a gran escala.',
		audience: 'Retail farmacéutico y cadenas con red de proveedores',
	},
];

export const caseStudies: CaseStudyItem[] = [
	{
		id: 'tcl',
		client: 'TCL',
		region: 'Colombia · China',
		industry: 'Tecnología',
		title: 'Integración financiera y automatización de nómina',
		description:
			'TCL, gigante global de tecnología, nos eligió como aliado para conectar sus sistemas de facturación y acelerar procesos que antes dependían del trabajo manual.',
		highlights: [
			'Integración entre SIIGO y ARK como pilar de su operación contable',
			'Traductor de nómina desde SIIGO para cargas masivas a Citibank y otros bancos',
			'Macros a medida que simplificaron tareas repetitivas del equipo',
		],
		logoSrc: '/logos/casos/tcl.png',
		logoAlt: 'Logo TCL',
		website: 'https://www.tcl.com/co/es',
	},
	{
		id: 'montandor',
		client: 'Montandor S.L.U.',
		region: 'Andorra',
		industry: 'Retail',
		title: 'APIs, e-commerce e IT tercerizado',
		description:
			'Montandor S.L.U. confió en nosotros para diseñar y conectar el ecosistema digital de su operación retail: integraciones, contenido automatizado y un equipo de NIYVAL embebido en su día a día.',
		highlights: [
			'Integración y desarrollo de APIs para plataformas de retail',
			'Contenido para e-commerce generado con procesos automatizados e IA',
			'Tercerización de tareas diarias de IT con nuestro equipo dedicado',
		],
		logoSrc: '/logos/casos/montandor.png',
		logoAlt: 'Logo Montandor S.L.U.',
		website: 'http://montandor.com/?locale=es',
	},
	{
		id: 'sanylan',
		client: 'Grupo Sanylan',
		region: 'Venezuela',
		industry: 'Consultoría',
		title: 'Plataforma de datos para decisiones de negocio',
		description:
			'Grupo Sanylan necesitaba ordenar información masiva de proveedores para decidir con datos, no con intuición. Construimos una plataforma a medida que convirtió el caos en criterio.',
		highlights: [
			'Gestión centralizada de datos de proveedores a gran escala',
			'Tableros y flujos orientados a decisiones comerciales',
			'Arquitectura pensada para crecer con el volumen de la operación',
		],
		logoSrc: '/logos/casos/sanylan.png',
		logoAlt: 'Logo Grupo Sanylan',
	},
	{
		id: 'anzu',
		client: 'ANZU',
		region: 'España',
		industry: 'Distribución',
		title: 'Portal B2B para clientes y pedidos de insumos',
		description:
			'ANZU, como proveedor, necesitaba que sus clientes pidieran insumos sin fricción. Creamos una plataforma donde cada tienda gestiona pedidos de forma clara, rápida y trazable.',
		highlights: [
			'Portal para que cada cliente administre su relación comercial',
			'Solicitud de insumos centralizada por tienda o punto de venta',
			'Operación más eficiente para el proveedor y sus clientes',
		],
		logoSrc: '/logos/casos/anzu.png',
		logoAlt: 'Logo ANZU',
		website: 'https://anzuht.online/',
	},
];
