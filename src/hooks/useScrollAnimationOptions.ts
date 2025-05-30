import { useEffect, useRef } from 'react';
import { animate, createScope, stagger, Scope } from 'animejs';

interface ScrollAnimationOptions {
    selector?: string;
    animation?: {
        opacity?: [number, number];
        translateY?: [number, number];
        duration?: number;
        easing?: string;
        staggerDelay?: number;
    };
    observer?: {
        threshold?: number;
        rootMargin?: string;
    };
    onlyScrollDown?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
    const elementRef = useRef<HTMLElement>(null);
    const scope = useRef<Scope>(null);

    useEffect(() => {
        const root = elementRef.current;
        if (!root) return;

        const config = {
            selector: options.selector || '.line',
            animation: {
                opacity: options.animation?.opacity || [0, 1],
                translateY: options.animation?.translateY || [80, 0],
                duration: options.animation?.duration || 1000,
                easing: options.animation?.easing || 'easeOutQuart',
                staggerDelay: options.animation?.staggerDelay || 200,
            },
            observer: {
                threshold: options.observer?.threshold || 0.2,
                rootMargin: options.observer?.rootMargin || '0px 0px -100px 0px',
            },
            onlyScrollDown: options.onlyScrollDown !== false, // Por defecto true
        };

        const elements = Array.from(root.querySelectorAll<HTMLElement>(config.selector));
        let lastScrollY = window.scrollY;

        scope.current = createScope({ root });

        const animateElements = () => {
            scope.current?.add(() => {
                animate(elements, {
                opacity: config.animation.opacity,
                translateY: config.animation.translateY,
                duration: config.animation.duration,
                easing: config.animation.easing,
                delay: stagger(config.animation.staggerDelay),
                });
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                const currentScrollY = window.scrollY;
                const isScrollingDown = currentScrollY > lastScrollY;

                if (entry.isIntersecting) {
                    if (config.onlyScrollDown) {
                        if (isScrollingDown) {
                            animateElements();
                        }
                    } else {
                        animateElements();
                    }
                }
                    lastScrollY = currentScrollY;
                });
            },
            {
                threshold: config.observer.threshold,
                rootMargin: config.observer.rootMargin,
            }
        );

        observer.observe(root);

        return () => {
            observer.disconnect();
            scope.current?.revert();
        };
    }, [options]);

    return elementRef;
};