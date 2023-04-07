import React from 'react';

import DeveloperInfo from './DeveloperInfo';
import FooterLower from './FooterLower';
import FooterMain from './FooterMain';
import { ThemeContext } from '../../Provider/ThemeColorProvider';

class Footer extends React.Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{({ theme }) => (
					<footer className={theme === 'dark' && 'dark'}>
						<FooterMain />
						<FooterLower />
						<DeveloperInfo />
					</footer>
				)}
			</ThemeContext.Consumer>
		);
	}
}

export default Footer;
