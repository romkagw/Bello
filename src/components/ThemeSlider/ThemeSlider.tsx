import React, { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeSlider.scss';
import Button from '../Button/Button';
import { ThemeContext } from '../../Provider/ThemeColorProvider';
import { THEME_LIGHT } from '../../constants/constants';

const ThemeSlider: React.FC = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div className='slider'>
			<div className={`slider-track ${theme}`}>
				<Button className={`slider-thumb ${theme}`} onClick={toggleTheme}>
					{theme === THEME_LIGHT ? <FiSun size={20} /> : <FiMoon size={20} />}
				</Button>
			</div>
		</div>
	);
};

export default ThemeSlider;
