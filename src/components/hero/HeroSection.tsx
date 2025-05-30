// Components
import { FlowPulseBackground } from '@components/animations/FlowAnimationSection';
// Hooks
import { useScrollAnimation } from '@hooks/useScrollAnimationOptions';
// STyles
import '@styles/hero/hero-section.scss';

export const HeroSection = () => {

	const sectionRef = useScrollAnimation({
    animation: {
			opacity: [0, 1],
			translateY: [80, 0],
			duration: 1000,
			easing: 'easeOutQuart',
			staggerDelay: 200,
		},
			observer: {
			threshold: 0.2,
			rootMargin: '0px 0px -100px 0px',
		},
		onlyScrollDown: false,
	});

	return (
		<section className='custom-software-section' ref={sectionRef}>
			<FlowPulseBackground trackRef={sectionRef} />

			<article className='custom-software-section__container'>
				<h2 className='line'>Diseñamos tecnología</h2>
				<h3 className='line'>que potencia tu negocio</h3>
				<p className='line small'>
					Software a la medida · Tercerización estratégica
				</p>
			</article>
		</section>
	);
};