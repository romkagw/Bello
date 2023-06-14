import React, { useContext } from 'react';
import HeaderTop from './HeaderTop';
import Promo from './Promo';
import { ThemeContext } from '../../Provider/ThemeColorProvider';
import { THEME_DARK } from '../../constants/constants';

const Header: React.FC = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<header className={theme === THEME_DARK ? 'dark' : ''}>
			<HeaderTop />
			<Promo />
		</header>
	);
};

export default Header;
