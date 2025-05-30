import { Brush } from '@assets/icons/brush';
import { useTheme } from '@contexts/ThemeContext';
import '@styles/tools/buttons/theme-buttons.scss';

export const ThemeButton = () => {
    const { currentTheme, toggleTheme } = useTheme();

    // Color del icono dependiendo del tema
    const getIconColor = () => {
        switch (currentTheme) {
            case 'blue':
                return '#ffffff';
            case 'gray':
                return '#ffffff';
            case 'white':
                return '#161616';
            default:
                return '#ffffff';
        }
    };

    return (
        <div className="theme-controls">
            <button
                onClick={toggleTheme}
                className={`theme-toggle-btn theme-${currentTheme}`}
            >
                <Brush
                    colorPrimary={getIconColor()}
                    className="theme-icon"
                />
            </button>
        </div>
    );
};