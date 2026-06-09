import { useCallback, useEffect, useState } from 'react';
import { type ThemeType, VALID_THEMES } from '@themes/colors';
import {
	applyThemeToDocument,
	getStoredTheme,
	persistTheme,
	resolveInitialTheme,
} from '@themes/theme-actions';

export function useBodyTheme(defaultTheme: ThemeType = 'blue') {
	const [currentTheme, setCurrentTheme] = useState<ThemeType>(defaultTheme);

	useEffect(() => {
		const initialTheme = resolveInitialTheme(defaultTheme);
		setCurrentTheme(initialTheme);
		applyThemeToDocument(initialTheme);

		const handleThemeChange = (event: Event) => {
			const customEvent = event as CustomEvent<ThemeType>;
			if (customEvent.detail && VALID_THEMES.includes(customEvent.detail)) {
				setCurrentTheme(customEvent.detail);
			}
		};

		window.addEventListener('nival-theme-change', handleThemeChange);
		return () => window.removeEventListener('nival-theme-change', handleThemeChange);
	}, [defaultTheme]);

	const setTheme = useCallback((theme: ThemeType) => {
		setCurrentTheme(theme);
		applyThemeToDocument(theme);
		persistTheme(theme);
	}, []);

	const toggleTheme = useCallback(() => {
		const currentIndex = VALID_THEMES.indexOf(currentTheme);
		const nextIndex = (currentIndex + 1) % VALID_THEMES.length;
		setTheme(VALID_THEMES[nextIndex]);
	}, [currentTheme, setTheme]);

	return { currentTheme, setTheme, toggleTheme, getStoredTheme };
}
