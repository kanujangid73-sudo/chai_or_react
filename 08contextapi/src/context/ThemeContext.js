import { createContext } from 'react';

// Default value initial configuration
export const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => {},
  lightTheme: () => {},
});