import React from 'react';
import HeaderTop from './HeaderTop';
import Promo from './Promo';
import { ThemeContext } from '../../Provider/ThemeColorProvider';

class Header extends React.Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{({ theme }) => (
					<header className={theme === 'dark' && 'dark'}>
						<HeaderTop />
						<Promo />
					</header>
				)}
			</ThemeContext.Consumer>
		);
	}
}

export default Header;
