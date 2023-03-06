import React from 'react';

import DeveloperInfo from './DeveloperInfo';
import FooterLower from './FooterLower';
import FooterMain from './FooterMain';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<FooterMain />
				<FooterLower />
				<DeveloperInfo />
			</footer>
		);
	}
}

export default Footer;
