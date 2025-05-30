import { useEffect } from 'react';

export function useRevealOnScroll<T extends HTMLElement>(
	ref: React.RefObject<T | null>,
	options?: IntersectionObserverInit,
) {
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) el.classList.add('is-visible');
				else el.classList.remove('is-visible');
			},
			{ threshold: 0.2, ...options },
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, [ref, options]);
}
