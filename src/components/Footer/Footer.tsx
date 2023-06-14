import React, { useContext } from 'react';

import DeveloperInfo from './DeveloperInfo';
import FooterLower from './FooterLower';
import FooterMain from './FooterMain';
import { ThemeContext } from '../../Provider/ThemeColorProvider';
import { THEME_DARK } from '../../constants/constants';

function Footer() {
	const { theme } = useContext(ThemeContext);

	return (
		<footer className={theme === THEME_DARK ? 'dark' : ''}>
			<FooterMain />
			<FooterLower />
			<DeveloperInfo />
		</footer>
	);
}

export default Footer;
