import { useEffect } from 'react';

export function useScrollFade<T extends HTMLElement>(
	ref: React.RefObject<T | null>,
) {
	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const onScroll = () => {
			const rect = el.getBoundingClientRect();
			// centro de la sección
			const sectionCenterY = (rect.top + rect.bottom) / 2;
			// centro de la ventana
			const viewportCenterY = window.innerHeight / 2;
			// distancia normalizada [0..1]
			const dist = Math.abs(sectionCenterY - viewportCenterY) / viewportCenterY;
			// opacidad = 1 cuando dist=0, llega a 0 en dist>=1
			const opacity = Math.max(0, 1 - dist);
			el.style.opacity = `${opacity}`;
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, [ref]);
}
