import { useEffect, useRef } from 'react';
import { animate, createScope, onScroll, stagger } from 'animejs';

import '@styles/ContactSection.scss';

export const ContactSection = () => {
	const contactSectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const contactSection = contactSectionRef.current;

		if (!contactSection) return;

		const scope = createScope({ root: contactSection }).add(() => {
			animate(contactSection, {
				opacity: [0, 1],
				duration: 1200,
				ease: 'easeOutCubic',
				autoplay: onScroll({
					target: contactSection,
					sync: 1,
				}),
			});
		});

		return () => {
			scope.revert();
		};
	}, []);

	return (
		<footer className='contact-section' ref={contactSectionRef}>
			<div className='contact-content'></div>
		</footer>
	);
};
