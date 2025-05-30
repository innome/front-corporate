export const THEME_COLORS = {
    blue: {
        logo: {
            base: '#e0e0e0',       // Color base (gris claro)
            primary: '#22266e',    // Azul oscuro
            secondary: '#3a4c99',  // Azul medio
            accent: '#3e5dbb',     // Azul más claro
            stroke: '#3a4c99',     // Color del borde
        },
        background: '#ffffff',
        acrylic: '#4a67c230',
        color: '#22266e',
        subtitle: '#6c7aa8',
    },
    gray: {
        logo: {
            base: '#f5f5f5',       // Color base (gris muy claro)
            primary: '#212230',    // Gris oscuro
            secondary: '#405259',  // Gris medio
            accent: '#75899b',     // Gris claro
            stroke: '#405259',     // Color del borde
        },
        background: '#ebeff7',
        acrylic: '#8296a828',
        color: '#212230',
        subtitle: '#75899b',
    },
    white: {
        logo: {
            base: '#969797',       // Color base (gris muy claro)
            primary: '#ffffff',    // Blanco puro
            secondary: '#c1c1c1',  // Gris claro
            accent: '#ddd',        // Gris muy claro
            stroke: '#ffffff',     // Borde blanco
        },
        background: '#161616',
        acrylic: '#f0f0f015',
        color: '#ffffff',
        subtitle: '#c1c1c1',
    }
} as const;

export type ThemeType = keyof typeof THEME_COLORS;

export const VALID_THEMES: ThemeType[] = ['blue', 'gray', 'white'];

export const getLogoColors = (theme: ThemeType) => {
    return THEME_COLORS[theme].logo;
};

export const getThemeColors = (theme: ThemeType) => {
    return THEME_COLORS[theme];
};