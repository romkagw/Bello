import React, { useContext } from 'react';
import HeaderTop from './HeaderTop';
import Promo from './Promo';
import { ThemeContext } from '../../Provider/ThemeColorProvider';

function Header() {
	const { theme } = useContext(ThemeContext);

	return (
		<header className={theme === 'dark' ? 'dark' : ''}>
			<HeaderTop />
			<Promo />
		</header>
	);
}

export default Header;
