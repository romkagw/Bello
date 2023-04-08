import React, { useContext } from 'react';

import DeveloperInfo from './DeveloperInfo';
import FooterLower from './FooterLower';
import FooterMain from './FooterMain';
import { ThemeContext } from '../../Provider/ThemeColorProvider';

function Footer() {
	const { theme } = useContext(ThemeContext);

	return (
		<footer className={theme === 'dark' ? 'dark' : ''}>
			<FooterMain />
			<FooterLower />
			<DeveloperInfo />
		</footer>
	);
}

export default Footer;
