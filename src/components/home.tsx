// src/components/Home.tsx
import { useRef, lazy, Suspense } from 'react';

import { ThemeButton } from './theme/ThemeButton';
import { Presentation } from './hero/Presentation';
import { HeroSection } from './hero/HeroSection';
import { MissionSection } from './ourPurpose/MissionSection';
import { VisionSection } from './ourPurpose/VisionSection';
import { ClientsSection } from './ClientsSection';
import { Footer } from './Footer';
import { ParallaxSection } from './ParallaxSection';

const FlowAnimation = lazy(() =>
	import('./animations/FlowAnimation').then((mod) => ({ default: mod.FlowAnimation })),
);

const pathD = 'M 0 200 Q 200 100, 400 200 T 800 200';

export const Home = () => {
	const parallaxRef = useRef<HTMLElement>(null);

	return (
		<main>
			<ThemeButton />
			<Presentation />
			<HeroSection />

			{/* <ParallaxSection
				ref={parallaxRef}
				background={
					<Suspense fallback={null}>
						<FlowAnimation
							pathD={pathD}
							trackRef={parallaxRef}
						/>
					</Suspense>
				}
			>
				<MissionSection />
				<VisionSection />
			</ParallaxSection> */}

			<MissionSection />
			<VisionSection />

			{/* <ClientsSection /> */}
			<Footer />
		</main>
	);
};
