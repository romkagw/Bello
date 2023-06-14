import React, { useState, ReactNode, FC } from 'react';
import { THEME_DARK, THEME_LIGHT } from '../constants/constants';

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: THEME_LIGHT,
  toggleTheme: () => {},
});

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(THEME_LIGHT);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
