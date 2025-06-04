import { getThemeColors } from '@themes/colors';
import { useTheme } from '@contexts/ThemeContext';

export const useThemeColors = () => {
    const { currentTheme } = useTheme();
    return getThemeColors(currentTheme);
};