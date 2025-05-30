import { useEffect, useRef, type RefObject } from 'react';
import { animate, createTimeline } from 'animejs';
import '@styles/animation/flow-animation-vision.scss';

import { useTheme } from '@contexts/ThemeContext';

interface Props {
	pathD: string;
	colorCircle?: string;
	colorLine?: string;
	invert?: boolean;
	trackRef: RefObject<HTMLElement | null>;
}

interface Particle {
	x: number;
	y: number;
	vx: number;
	vy: number;
	life: number;
	maxLife: number;
	size: number;
	type: 'normal' | 'trail';
	color: string;
}

interface ForceRing {
	x: number;
	y: number;
	radius: number;
	opacity: number;
	id: number;
}

interface ConstellationNode {
	x: number;
	y: number;
	id: number;
	active: boolean;
	pulse: number;
	connections: number[];
}

interface Connection {
	from: ConstellationNode;
	to: ConstellationNode;
	opacity: number;
	energy: number;
}

interface OrbitalCircle {
	angle: number;
	distance: number;
	speed: number;
	size: number;
	color: string;
	trail: Array<{x: number, y: number, opacity: number}>;
}

export const FlowAnimation = ({
	pathD,
	colorCircle,
	colorLine,
	invert = false,
	trackRef,
}: Props) => {
	const svgRef = useRef<SVGSVGElement>(null);
	const pathRef = useRef<SVGPathElement>(null);

	const mainDotRef = useRef<SVGCircleElement>(null);
	const particlesGroupRef = useRef<SVGGElement>(null);
	const forceRingsGroupRef = useRef<SVGGElement>(null);
	const orbitalsGroupRef = useRef<SVGGElement>(null);

	const particlesRef = useRef<Particle[]>([]);
	const forceRingsRef = useRef<ForceRing[]>([]);
	const orbitalsRef = useRef<OrbitalCircle[]>([]);

	const animationFrameRef = useRef<number | undefined>(undefined);
	const lastPositionRef = useRef({ x: 0, y: 0 });
	const currentProgressRef = useRef(0);
	const pathLengthRef = useRef(0);

	const { currentTheme } = useTheme();

	const getMainLineColor = () => {
		switch (currentTheme) {
			case 'blue':
				return '#3e5dbb';
			case 'gray':
				return '#75899b';
			case 'white':
				return '#ffffff';
			default:
				return '#ffffff';
		}
	};

	const getOrbitalColors = () => {
		switch (currentTheme) {
			case 'blue':
				return ['#ff6b6b', '#26a69a', '#45b7d1'];
			case 'gray':
				return ['#ff8a65', '#26a69a', '#5c6bc0'];
			case 'white':
				return ['#ff5722', '#00bcd4', '#9c27b0'];
			default:
				return ['#ff5722', '#00bcd4', '#9c27b0'];
		}
	};

	// Colores para el sistema
	const colors = {
		primary: '#4ecdc4',
		secondary: getMainLineColor() + '80',
		accent: getMainLineColor() + 'CC',
		orbital1: getOrbitalColors()[0],
		orbital2: getOrbitalColors()[1],
		orbital3: getOrbitalColors()[2],
	};

	// Inicializar círculos orbitales con velocidades más lentas
	const initializeOrbitals = () => {
		orbitalsRef.current = [
			{
				angle: 0,
				distance: 25,
				speed: 0.03, // Reducido de 0.08 a 0.03
				size: 4,
				color: colors.orbital1,
				trail: []
			},
			{
				angle: 120,
				distance: 35,
				speed: -0.025, // Reducido de -0.06 a -0.025
				size: 3,
				color: colors.orbital2,
				trail: []
			},
			{
				angle: 240,
				distance: 20,
				speed: 0.04, // Reducido de 0.1 a 0.04
				size: 3.5,
				color: colors.orbital3,
				trail: []
			}
		];
	};

	const createParticle = (x: number, y: number, type: 'normal' | 'trail' = 'normal'): Particle => {
		const particleColor = type === 'trail' ? colors.secondary : colors.primary;

		return {
			x,
			y,
			vx: (Math.random() - 0.5) * 4,
			vy: (Math.random() - 0.5) * 4,
			life: type === 'trail' ? 80 : 60,
			maxLife: type === 'trail' ? 80 : 60,
			size: Math.random() * 3 + 1,
			type,
			color: particleColor
		};
	};

	// Actualizar círculos orbitales - MOVIMIENTO AUTOMÁTICO
	const updateOrbitals = (centerX: number, centerY: number) => {
		orbitalsRef.current.forEach(orbital => {
			// Movimiento continuo automático independiente del scroll
			orbital.angle += orbital.speed;

			const x = centerX + Math.cos(orbital.angle) * orbital.distance;
			const y = centerY + Math.sin(orbital.angle) * orbital.distance;

			// Agregar posición a la cola
			orbital.trail.unshift({ x, y, opacity: 1 });

			// Mantener solo las últimas 6 posiciones para mejor performance
			if (orbital.trail.length > 6) {
				orbital.trail.pop();
			}

			// Desvanecer la cola
			orbital.trail.forEach((point, index) => {
				point.opacity = 1 - (index / orbital.trail.length);
			});
		});
	};

	// Actualizar orbitales continuamente - INDEPENDIENTE DEL SCROLL
	const updateOrbitalsAutomatically = () => {
		if (lastPositionRef.current.x > 0) {
			updateOrbitals(lastPositionRef.current.x, lastPositionRef.current.y);
		}
	};

	const updateParticles = () => {
		particlesRef.current = particlesRef.current.filter(particle => {
			particle.x += particle.vx;
			particle.y += particle.vy;
			particle.life--;

			// Solo fricción normal para partículas trail
			particle.vx *= 0.98;
			particle.vy *= 0.98;

			return particle.life > 0;
		});
	};

	const updateForceRings = () => {
		forceRingsRef.current = forceRingsRef.current.filter(ring => {
			ring.radius += 1; // Reducido de 1.5 a 1
			ring.opacity *= 0.88; // Reducido de 0.92 a 0.88 para que se desvanezcan más rápido
			return ring.opacity > 0.01 && ring.radius < 40; // Reducido de 60 a 40 para ondas más pequeñas
		});
	};

	const renderParticles = () => {
		const group = particlesGroupRef.current;
		if (!group) return;

		while (group.firstChild) {
			group.removeChild(group.firstChild);
		}

		particlesRef.current.forEach(particle => {
			const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
			const opacity = particle.life / particle.maxLife;
			
			circle.setAttribute('cx', particle.x.toString());
			circle.setAttribute('cy', particle.y.toString());
			circle.setAttribute('r', (particle.size * opacity).toString());
			circle.setAttribute('fill', particle.color);
			circle.setAttribute('opacity', (opacity * 0.8).toString());
			circle.classList.add('flow-particle', `particle-${particle.type}`);
			
			group.appendChild(circle);
		});
	};

	const renderForceRings = () => {
		const group = forceRingsGroupRef.current;
		if (!group) return;

		while (group.firstChild) {
			group.removeChild(group.firstChild);
		}

		forceRingsRef.current.forEach(ring => {
			const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
			
			circle.setAttribute('cx', ring.x.toString());
			circle.setAttribute('cy', ring.y.toString());
			circle.setAttribute('r', ring.radius.toString());
			circle.setAttribute('fill', 'none');
			circle.setAttribute('stroke', colors.primary);
			circle.setAttribute('stroke-width', '1');
			circle.setAttribute('opacity', (ring.opacity * 0.25).toString()); // Reducido de 0.4 a 0.25
			circle.classList.add('force-ring');
			
			group.appendChild(circle);
		});
	};

	const renderConstellation = () => {
		// REMOVIDO - No renderizar nodos de constelación
		return;
	};

	const renderConnections = () => {
		// REMOVIDO - No renderizar conexiones
		return;
	};

	const renderOrbitals = (centerX: number, centerY: number) => {
		const group = orbitalsGroupRef.current;
		if (!group) return;

		while (group.firstChild) {
			group.removeChild(group.firstChild);
		}

		// NUEVO: Ocultar orbitales cuando esté al inicio O al final
		if (currentProgressRef.current <= 0.02 || currentProgressRef.current >= 0.98) {
			return; // No renderizar si está al inicio (primeros 2%) o casi completado (últimos 2%)
		}

		orbitalsRef.current.forEach(orbital => {
			// Renderizar cola
			orbital.trail.forEach((point, index) => {
				if (index > 0) {
					const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
					
					circle.setAttribute('cx', point.x.toString());
					circle.setAttribute('cy', point.y.toString());
					circle.setAttribute('r', (orbital.size * point.opacity * 0.5).toString());
					circle.setAttribute('fill', orbital.color);
					circle.setAttribute('opacity', (point.opacity * 0.4).toString());
					circle.classList.add('orbital-trail');
					
					group.appendChild(circle);
				}
			});
			
			// Renderizar círculo principal
			if (orbital.trail.length > 0) {
				const current = orbital.trail[0];
				const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
				
				circle.setAttribute('cx', current.x.toString());
				circle.setAttribute('cy', current.y.toString());
				circle.setAttribute('r', orbital.size.toString());
				circle.setAttribute('fill', orbital.color);
				circle.setAttribute('opacity', '0.9');
				circle.classList.add('orbital-circle');
				
				group.appendChild(circle);
			}
		});
	};

	const animationLoop = () => {
		updateParticles();
		updateForceRings();
		updateOrbitalsAutomatically(); // Movimiento automático continuo
		renderParticles();
		renderForceRings();
		
		// Solo renderizar orbitales si tenemos posición del círculo principal
		if (lastPositionRef.current.x > 0) {
			renderOrbitals(lastPositionRef.current.x, lastPositionRef.current.y);
		}
		
		animationFrameRef.current = requestAnimationFrame(animationLoop);
	};

	useEffect(() => {
		const mainPath = pathRef.current!;
		const mainDot = mainDotRef.current!;
		
		const mainLength = mainPath.getTotalLength();
		
		pathLengthRef.current = mainLength;

		// Inicializar sistemas
		initializeOrbitals();

		// Configurar path principal para dibujo progresivo
		mainPath.style.strokeDasharray = `${mainLength}`;
		mainPath.style.strokeDashoffset = `${mainLength}`; // Inicialmente oculto

		// Iniciar loop de animación
		animationFrameRef.current = requestAnimationFrame(animationLoop);

		const onScroll = () => {
			const trackEl = trackRef.current;
			if (!trackEl) return;

			const scrollY = window.pageYOffset;
			const winH = window.innerHeight;
			const start = trackEl.offsetTop;
			const end = trackEl.offsetTop + trackEl.offsetHeight - winH;
			let p = (scrollY - start) / (end - start);
			p = Math.max(0, Math.min(1, p));
			if (invert) p = 1 - p;

			currentProgressRef.current = p;

			// Mover círculo principal
			const { x, y } = mainPath.getPointAtLength(p * mainLength);
			mainDot.setAttribute('cx', `${x}`);
			mainDot.setAttribute('cy', `${y}`);

			// Dibujar línea progresivamente donde pasa el círculo
			const currentLength = p * mainLength;
			const remainingLength = mainLength - currentLength;
			
			// Actualizar el path principal para que se dibuje hasta donde está el círculo
			mainPath.style.strokeDashoffset = `${remainingLength}`;

			// Generar efectos de movimiento
			const distance = Math.sqrt(
				Math.pow(x - lastPositionRef.current.x, 2) + 
				Math.pow(y - lastPositionRef.current.y, 2)
			);
			
			if (distance > 4) { // Aumentado de 3 a 4 para reducir frecuencia
				// Crear partículas de cola menos frecuentemente
				if (Math.random() > 0.3) { // Solo 70% de las veces
					particlesRef.current.push(createParticle(x, y, 'trail'));
				}
				
				lastPositionRef.current = { x, y };
			}

			// Manejar visibilidad
			if (p <= 0 || p >= 1) {
				mainDot.style.opacity = '0';
			} else {
				// Configurar estilos para el path principal
				mainPath.style.stroke = colors.primary;
				mainPath.style.opacity = '0.4';
				
				mainDot.style.opacity = '1';
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		
		return () => {
			window.removeEventListener('scroll', onScroll);
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [pathD, invert, trackRef, colorCircle]);

	return (
		<div className='flow-vision-container'>
			<svg
				ref={svgRef}
				className='flow-vision'
				viewBox='0 0 800 300'
				preserveAspectRatio='xMinYMin meet'
			>
				{/* Paths de fondo */}
				<path
					ref={pathRef}
					d={pathD}
					stroke={colors.primary}
					strokeWidth='3'
					fill='none'
					strokeLinecap='round'
					className='flow-vision-path main-path'
				/>
				<path
					d={pathD}
					stroke={colors.primary}
					strokeWidth='1.5'
					fill='none'
					strokeLinecap='round'
					className='flow-vision-path secondary-path'
				/>
				<path
					d={pathD}
					stroke={colors.primary}
					strokeWidth='1.5'
					fill='none'
					strokeLinecap='round'
					className='flow-vision-path secondary-path'
				/>
				{/* Sistemas de efectos */}
				<g ref={particlesGroupRef} className='particles-group'></g>
				<g ref={orbitalsGroupRef} className='orbitals-group'></g>
				<circle
					ref={mainDotRef}
					r='10'
					cx='0'
					cy='0'
					fill={colors.primary}
					className='flow-vision-dot main-dot'
				/>
			</svg>
		</div>
	);
};