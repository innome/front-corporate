// Icons
import { Graphics } from '@assets/graphics';
import { Standarization } from '@assets/Standardization';
// Hooks
import { useThemeColors } from '@hooks/useThemeColors';
import { useScrollAnimation } from '@hooks/useScrollAnimationOptions';
// Styles
import '@styles/ourServices/what-do-we-do.scss';

export const WhatDoWeDo = () => {
    const theme = useThemeColors();

    const containerRef = useScrollAnimation({
		animations: [
			{
				selector: '.fade-title',
				animation: {
					opacity: [0, 1],
					translateY: [80, 0],
					duration: 1000,
					easing: 'easeOutQuart',
					staggerDelay: 200,
				},
			},
            {
                selector: '.animate-from-left',
                animation: {
                    opacity: [0, 1],
                    translateX: [-60, 0],
                    duration: 1000,
                },
            },
            {
                selector: '.animate-from-right',
                animation: {
                    opacity: [0, 1],
                    translateX: [60, 0],
                    duration: 1000,
                },
            },
		],
		observer: {
			threshold: 0.3,
			rootMargin: '0px 0px -100px 0px',
		},
		onlyScrollDown: false,
	});

    return (
        <section className='container-ourServices' ref={containerRef}>
            <h2 className='title-ourServices fade-title'>¿Qué hacemos?</h2>
            <p className='subtitle-ourServices fade-title'>
                Soluciones tecnológicas adaptadas a tus procesos y necesidades.
            </p>
            <div className='container-ourServices__articles'>
                <div className='container-ourServices__card animate-from-left'>
                    <div className='card-svgServices'>
                        <picture className='card-svgServices__image'>
                            <Standarization colorPrimary={theme.primary} />
                        </picture>
                    </div>
                    <article className='container-ourServices__card__info'>
                        <h3>Tercerización y Estandarización de Procesos</h3>
                        <p>
                            Optimiza tu negocio tercerizando y estandarizando procesos con nuestro equipo experto. Desde servicios de desarrollo hasta analítica avanzada de datos, gestión eficiente de bases de datos e implementaciones de software, adaptamos cada solución a tu medida.
                        </p>
                    </article>
                </div>

                <div className='container-ourServices__card animate-from-right align-end reverse'>
                    <div className='card-svgServices'>
                        <picture className='card-svgServices__image'>
                            <Graphics colorPrimary={theme.primary} />
                        </picture>
                    </div>
                    <article className='container-ourServices__card__info'>
                        <h3>Software a la Medida y Automatización</h3>
                        <p>
                            Creamos soluciones tecnológicas personalizadas que impulsan el crecimiento de tu negocio. Desde software a la medida hasta plataformas SaaS, automatizamos tus procesos para maximizar la productividad y competitividad de tu empresa.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};
