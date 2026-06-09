import { type ThemeType, VALID_THEMES, getThemeColors } from './colors';

export const THEME_STORAGE_KEY = 'nival-theme';

export function applyThemeToDocument(theme: ThemeType): void {
	if (typeof document === 'undefined') return;

	const themeColors = getThemeColors(theme);

	document.body.className = document.body.className.replace(/theme-\w+/g, '');
	document.body.classList.add(`theme-${theme}`);
	document.body.style.backgroundColor = themeColors.primary;
	document.body.style.color = themeColors.secondary;
	document.body.style.setProperty('--color-primary', themeColors.primary);
	document.body.style.setProperty('--color-secondary', themeColors.secondary);
	document.body.style.setProperty('--color-subtitle', themeColors.subtitle);
	document.body.style.setProperty('--color-subTitleInvert', themeColors.subtitleInvert);
	document.body.style.setProperty('--color-acrylic', themeColors.acrylic);
	document.body.style.setProperty('--color-acrylicInvert', themeColors.acrylicInvert);
	document.body.style.setProperty('--color-subSecondaryInvert', themeColors.subSecondaryInvert);

	window.dispatchEvent(new CustomEvent('nival-theme-change', { detail: theme }));
}

export function getStoredTheme(): ThemeType | null {
	if (typeof window === 'undefined') return null;
	const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeType | null;
	return savedTheme && VALID_THEMES.includes(savedTheme) ? savedTheme : null;
}

export function persistTheme(theme: ThemeType): void {
	if (typeof window !== 'undefined') {
		localStorage.setItem(THEME_STORAGE_KEY, theme);
	}
}

export function resolveInitialTheme(defaultTheme: ThemeType = 'blue'): ThemeType {
	const stored = getStoredTheme();
	if (stored) return stored;

	if (typeof window !== 'undefined') {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		return prefersDark ? 'white' : defaultTheme;
	}

	return defaultTheme;
}
