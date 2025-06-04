import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type ThemeType, VALID_THEMES, getThemeColors } from '../themes/colors';

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

    const applyThemeToBody = (theme: ThemeType) => {
        if (typeof document !== 'undefined') {
            const themeColors = getThemeColors(theme);

            // Limpiar clases anteriores
            document.body.className = document.body.className.replace(/theme-\w+/g, '');

            // Aplicar nueva clase y estilos
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
        }
    };

    const setTheme = (theme: ThemeType) => {
        setCurrentTheme(theme);
        applyThemeToBody(theme);

        // Guardar en localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('nival-theme', theme);
        }
    };

    const toggleTheme = () => {
        const currentIndex = VALID_THEMES.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % VALID_THEMES.length;
        setTheme(VALID_THEMES[nextIndex]);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('nival-theme') as ThemeType | null;

            if (savedTheme && VALID_THEMES.includes(savedTheme)) {
                setCurrentTheme(savedTheme);
                applyThemeToBody(savedTheme);
            } else {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const systemTheme: ThemeType = prefersDark ? 'white' : 'blue';
                setCurrentTheme(systemTheme);
                applyThemeToBody(systemTheme);
            }
        }
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
