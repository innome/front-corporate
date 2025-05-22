import { useEffect, useRef } from 'react';
import { animate, createScope, onScroll } from 'animejs';
import '@styles/ClientsSection.scss';

const CLIENTS = [
	'Acme',
	'Globex',
	'BetaSoft',
	'NovaAI',
	'SkyNet',
	'LumenEdge',
	'TechLayer',
	'Nexus',
];

export const ClientCard = ({ name }: { name: string }) => {
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const card = cardRef.current!;
		const scope = createScope({ root: card }).add(() => {
			animate(card, {
				duration: 1,
				opacity: [0, 1],
				scale: [0.8, 1],
				easing: 'easeInOutQuad',
				autoplay: onScroll({
					target: card,
					enter: 'center center',
					leave: 'top top',
					sync: 1,
				}),
			});
		});

		return () => scope.revert();
	}, []);

	return (
		<div className='client-card' ref={cardRef}>
			<h3>{name}</h3>
			<p>Soluciones innovadoras y automatización personalizada.</p>
		</div>
	);
};

export const ClientsSection = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);

	return (
		<section className='clients-section' ref={sectionRef}>
			{/* Static */}
			<div className='clients-info'>
				<h2 className='clients-title'>Nuestros Clientes</h2>
				<p className='clients-caption'>
					Ellos confían en nosotros para automatizar sus flujos y crear software
					a medida.
				</p>
			</div>

			{/* Animated - scrollable */}
			<div className='clients-viewport' ref={cardsRef}>
				{CLIENTS.map((name) => (
					<div key={name} className='client-wrapper'>
						<ClientCard name={name} />
					</div>
				))}
			</div>
		</section>
	);
};
