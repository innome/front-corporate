import { forwardRef, type ReactNode, type ForwardedRef } from 'react';
import '@styles/ParallaxSection.scss';

interface ParallaxSectionProps {
	background: ReactNode;
	children: ReactNode;
}

export const ParallaxSection = forwardRef<HTMLElement, ParallaxSectionProps>(
	({ background, children }, ref: ForwardedRef<HTMLElement>) => (
		<section className='parallax-section' ref={ref}>
			<div className='parallax-mask'>
				<div className='parallax-bg'>{background}</div>
				<div className='parallax-content'>{children}</div>
			</div>
		</section>
	),
);
