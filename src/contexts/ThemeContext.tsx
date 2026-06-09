import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type ThemeType, VALID_THEMES } from '../themes/colors';
import {
	applyThemeToDocument,
	persistTheme,
	resolveInitialTheme,
} from '../themes/theme-actions';

interface ThemeContextType {
	currentTheme: ThemeType;
	setTheme: (theme: ThemeType) => void;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
	defaultTheme?: ThemeType;
}

export const ThemeProvider = ({ children, defaultTheme = 'blue' }: ThemeProviderProps) => {
	const [currentTheme, setCurrentTheme] = useState<ThemeType>(defaultTheme);

	const setTheme = (theme: ThemeType) => {
		setCurrentTheme(theme);
		applyThemeToDocument(theme);
		persistTheme(theme);
	};

	const toggleTheme = () => {
		const currentIndex = VALID_THEMES.indexOf(currentTheme);
		const nextIndex = (currentIndex + 1) % VALID_THEMES.length;
		setTheme(VALID_THEMES[nextIndex]);
	};

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

	return (
		<ThemeContext.Provider value={{ currentTheme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme debe usarse dentro de un ThemeProvider');
	}
	return context;
};
