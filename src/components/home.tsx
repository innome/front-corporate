// src/components/Home.tsx
import { useRef, lazy, Suspense } from 'react';

import { CustomSoftwareSection } from './CustomSoftwareSection';
import { MissionSection } from './MissionSection';
import { VisionSection } from './VisionSection';
import { ClientsSection } from './ClientsSection';
import { ContactSection } from './ContactSection';
import { ParallaxSection } from './ParallaxSection';

const FlowAnimation = lazy(() =>
	import('./FlowAnimation').then((mod) => ({ default: mod.FlowAnimation })),
);

const pathD = 'M 0 200 Q 200 100, 400 200 T 800 200';

export const Home = () => {
	const parallaxRef = useRef<HTMLElement>(null);

	return (
		<main>
			<CustomSoftwareSection />

			<ParallaxSection
				ref={parallaxRef}
				background={
					<Suspense fallback={null}>
						<FlowAnimation
							pathD={pathD}
							color='#4c69c1'
							trackRef={parallaxRef}
						/>
					</Suspense>
				}
			>
				<MissionSection />
				<VisionSection />
			</ParallaxSection>

			<ClientsSection />
			<ContactSection />
		</main>
	);
};
