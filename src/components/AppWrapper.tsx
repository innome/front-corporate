import { ThemeProvider } from '@contexts/ThemeContext';
import { Home } from '@components/Home';
import type { ThemeType } from '@themes/colors';

interface AppWrapperProps {
    defaultTheme?: ThemeType;
}

export const AppWrapper = ({ defaultTheme = 'white' }: AppWrapperProps) => {
    return (
        <ThemeProvider defaultTheme={defaultTheme}>
            <Home />
        </ThemeProvider>
    );
};