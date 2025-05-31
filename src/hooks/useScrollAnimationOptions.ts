import { useEffect, useRef } from 'react';
import { animate, createScope, stagger, Scope } from 'animejs';

interface AnimationConfig {
    selector: string;
    animation: {
        opacity?: [number, number];
        translateY?: [number, number];
        translateX?: [number, number];
        duration?: number;
        easing?: string;
        staggerDelay?: number;
    };
}

interface ScrollAnimationOptions {
    animations?: AnimationConfig[];
    observer?: {
        threshold?: number;
        rootMargin?: string;
    };
    onlyScrollDown?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
    const elementRef = useRef<HTMLElement>(null);
    const scope = useRef<Scope | null>(null);

    // Guarda elementos animados (para que no repita)
    const animatedElements = useRef<Set<HTMLElement>>(new Set());

    useEffect(() => {
        const root = elementRef.current;
        if (!root || !options.animations || options.animations.length === 0) return;

        const configObserver = {
            threshold: options.observer?.threshold ?? 0.2,
            rootMargin: options.observer?.rootMargin ?? '0px 0px -100px 0px',
        };
        const onlyScrollDown = options.onlyScrollDown !== false;

        let lastScrollY = window.scrollY;
        scope.current = createScope({ root });

        const animateElements = () => {
            options.animations!.forEach(({ selector, animation }) => {
                const elements = Array.from(root.querySelectorAll<HTMLElement>(selector));
                const animateProps: any = {
                    opacity: animation.opacity ?? [0, 1],
                    duration: animation.duration ?? 1000,
                    easing: animation.easing ?? 'easeOutQuart',
                    delay: stagger(animation.staggerDelay ?? 200),
                };
                if (animation.translateY !== undefined) {
                    animateProps.translateY = animation.translateY;
                }
                if (animation.translateX !== undefined) {
                    animateProps.translateX = animation.translateX;
                }

                const elementsToAnimate = elements.filter(el => !animatedElements.current.has(el));

                if (elementsToAnimate.length === 0) return;

                animatedElements.current = new Set([
                    ...Array.from(animatedElements.current),
                    ...elementsToAnimate,
                ]);

                scope.current?.add(() => {
                    animate(elementsToAnimate, animateProps);
                });
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const currentScrollY = window.scrollY;
                    const isScrollingDown = currentScrollY > lastScrollY;

                    if (entry.isIntersecting) {
                        if (!onlyScrollDown || (onlyScrollDown && isScrollingDown)) {
                            animateElements();
                        }
                    }
                    lastScrollY = currentScrollY;
                });
            },
            {
                threshold: configObserver.threshold,
                rootMargin: configObserver.rootMargin,
            }
        );

        observer.observe(root);

        return () => {
            observer.disconnect();
            scope.current?.revert();
            scope.current = null;
            animatedElements.current.clear();
        };
    }, [options]);

    return elementRef;
};
