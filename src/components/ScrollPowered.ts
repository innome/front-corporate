import { useEffect, useRef } from 'react';
import { animate, createScope, stagger } from 'animejs';

export const useScrollReveal = (selector: string) => {
	const ref = useRef<HTMLDivElement>(null);
	const scope = useRef<any>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && ref.current) {
					const targets = ref.current.querySelectorAll(selector);
					scope.current = createScope({ root: ref }).add(() => {
						animate(targets, {
							opacity: [0, 1],
							translateY: [40, 0],
							duration: 1000,
							easing: 'easeOutExpo',
							delay: stagger(100, { start: 0 }),
						});
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.2 },
		);

		if (ref.current) observer.observe(ref.current);
		return () => scope.current?.revert();
	}, [selector]);

	return ref;
};
