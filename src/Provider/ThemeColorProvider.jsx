/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext({
	theme: 'light',
	toggleTheme: () => {}
});

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
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
