import { caseStudies } from '@data/company-content';

export interface NavLinkItem {
	label: string;
	href: string;
	description?: string;
}

export interface NavTabGroup {
	id: string;
	label: string;
	items: NavLinkItem[];
}

export const ROUTES = {
	home: '/',
	soluciones: '/soluciones',
	capacidades: '/capacidades',
	productos: '/productos',
	nosotros: '/nosotros',
	casos: '/casos',
	proceso: '/proceso',
	contacto: '/contacto',
} as const;

export const solucionesTabs: NavTabGroup[] = [
	{
		id: 'digitales',
		label: 'Soluciones digitales',
		items: [
			{ label: 'Software a la medida', href: '/soluciones/software-a-la-medida', description: 'Sistemas hechos para tu operación, no al revés.' },
			{ label: 'Automatización de procesos', href: '/soluciones/automatizacion-procesos', description: 'Menos tareas manuales, más tiempo para lo importante.' },
			{ label: 'Plataformas SaaS', href: '/soluciones/plataformas-saas', description: 'Tu producto digital, listo para escalar.' },
		],
	},
	{
		id: 'transformacion',
		label: 'Transformación digital',
		items: [
			{ label: 'Consultoría tecnológica', href: '/soluciones/consultoria-tecnologica', description: 'Claridad antes de invertir un peso.' },
			{ label: 'Arquitectura de sistemas', href: '/soluciones/arquitectura-sistemas', description: 'Bases sólidas para crecer sin dolores de cabeza.' },
			{ label: 'Migración a la nube', href: '/soluciones/migracion-cloud', description: 'Moderniza sin parar la operación.' },
		],
	},
	{
		id: 'analitica',
		label: 'Analítica y datos',
		items: [
			{ label: 'Inteligencia de negocios', href: '/soluciones/business-intelligence', description: 'Decisiones con datos de verdad.' },
			{ label: 'Ingeniería de datos', href: '/soluciones/data-engineering', description: 'Flujos confiables y escalables.' },
			{ label: 'Tableros ejecutivos', href: '/soluciones/dashboards-ejecutivos', description: 'Lo que importa, en un solo vistazo.' },
		],
	},
];

export const capacidadesItems: NavLinkItem[] = [
	{ label: 'Integraciones API', href: '/capacidades/integraciones-api', description: 'Conecta las herramientas que ya usas.' },
	{ label: 'Seguridad y cumplimiento', href: '/capacidades/seguridad-compliance', description: 'Protección desde el diseño.' },
	{ label: 'Automatización con IA', href: '/capacidades/automatizacion-ia', description: 'Inteligencia donde de verdad suma.' },
	{ label: 'Gestión de datos', href: '/capacidades/gestion-datos', description: 'Información ordenada y lista para usar.' },
	{ label: 'Desarrollo cloud native', href: '/capacidades/desarrollo-cloud-native', description: 'Escalable desde el primer día.' },
];

export const productosItems: NavLinkItem[] = [
	{ label: 'Punch Booking', href: `${ROUTES.productos}#punch-booking`, description: 'Reservas para dojos, gyms y clases.' },
	{ label: 'Toth Admin', href: `${ROUTES.productos}#toth-admin`, description: 'Inventario y pedidos a proveedores.' },
	{ label: 'Fang', href: `${ROUTES.productos}#fang`, description: 'Gestión de citas para profesionales.' },
	{ label: 'Turpial', href: `${ROUTES.productos}#turpial`, description: 'Gestión de proveedores a escala.' },
];

export const casosItems: NavLinkItem[] = [
	{ label: 'Ver todos', href: ROUTES.casos, description: 'Proyectos en Colombia, Andorra, Venezuela y España.' },
	...caseStudies.map((caseItem) => ({
		label: caseItem.client,
		href: `${ROUTES.casos}#${caseItem.id}`,
		description: caseItem.title,
	})),
];

export const companiaItems: NavLinkItem[] = [
	{ label: 'Nosotros', href: ROUTES.nosotros },
	{ label: 'Casos de éxito', href: ROUTES.casos },
	{ label: 'Misión y visión', href: `${ROUTES.nosotros}#mision` },
	{ label: 'Equipo', href: `${ROUTES.nosotros}#equipo` },
	{ label: 'Carreras', href: `${ROUTES.nosotros}#carreras` },
];

export const footerNavGroups = [
	{
		title: 'Soluciones',
		links: [
			{ label: 'Ver todas', href: ROUTES.soluciones },
			...solucionesTabs.flatMap((tab) => tab.items).slice(0, 3),
		],
	},
	{
		title: 'Capacidades',
		links: [
			{ label: 'Ver todas', href: ROUTES.capacidades },
			...capacidadesItems.slice(0, 3),
		],
	},
	{
		title: 'Productos',
		links: [
			{ label: 'Ver todos', href: ROUTES.productos },
			...productosItems.slice(0, 3),
		],
	},
	{
		title: 'Casos de éxito',
		links: [
			{ label: 'Ver todos', href: ROUTES.casos },
			...casosItems.slice(1, 4),
		],
	},
	{
		title: 'Compañía',
		links: [
			...companiaItems,
			{ label: 'Nuestro proceso', href: ROUTES.proceso },
		],
	},
];

export const homeQuickLinks = [
	{ label: 'Soluciones', href: ROUTES.soluciones, description: 'Software a la medida, tercerización y automatización.' },
	{ label: 'Capacidades', href: ROUTES.capacidades, description: 'Integraciones, cloud native, IA y más.' },
	{ label: 'Productos', href: ROUTES.productos, description: 'Punch Booking, Toth Admin, Fang y Turpial.' },
	{ label: 'Casos de éxito', href: ROUTES.casos, description: 'TCL, Montandor S.L.U., Grupo Sanylan y ANZU.' },
	{ label: 'Nosotros', href: ROUTES.nosotros, description: 'Misión, visión y la gente detrás de NIYVAL.' },
	{ label: 'Proceso', href: ROUTES.proceso, description: 'Cómo elegir la solución correcta, paso a paso.' },
	{ label: 'Contacto', href: ROUTES.contacto, description: 'Cuéntanos tu proyecto. Te respondemos pronto.' },
];
