import { ThemeProvider } from '@contexts/ThemeContext';
import type { ThemeType } from '@themes/colors';
import type { ReactNode } from 'react';

interface AppWrapperProps {
	defaultTheme?: ThemeType;
	children: ReactNode;
}

export const AppWrapper = ({ defaultTheme = 'white', children }: AppWrapperProps) => {
	return (
		<ThemeProvider defaultTheme={defaultTheme}>
			{children}
		</ThemeProvider>
	);
};
