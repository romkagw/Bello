/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { THEME_DARK, THEME_LIGHT } from '../constants/constants';

export const ThemeContext = React.createContext({
	theme: THEME_LIGHT,
	toggleTheme: () => {}
});

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(THEME_LIGHT);

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
}

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired
};

export default ThemeProvider;
