import React from 'react';
import HeaderTop from './HeaderTop';
import Promo from './Promo';

class Header extends React.Component {
	render() {
		return (
			<header>
				<HeaderTop />
				<Promo />
			</header>
		);
	}
}

export default Header;
