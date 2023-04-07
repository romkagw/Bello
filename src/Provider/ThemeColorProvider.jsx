/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext({
	theme: 'light',
	toggleTheme: () => {}
});

class ThemeProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = { theme: 'light' };
	}

	toggleTheme = () => {
		this.setState(prevState => ({
			theme: prevState.theme === 'light' ? 'dark' : 'light'
		}));
	};

	render() {
		const { children } = this.props;
		const { theme } = this.state;

		return (
			<ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
				{children}
			</ThemeContext.Provider>
		);
	}
}

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired
};

export default ThemeProvider;
