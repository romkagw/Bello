import React, { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeSlider.scss';
import Button from '../Button/Button';
import { ThemeContext } from '../../Provider/ThemeColorProvider';

function ThemeSlider() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div className='slider'>
			<div className={`slider-track ${theme}`}>
				<Button className={`slider-thumb ${theme}`} onClick={toggleTheme}>
					{theme === 'light' ? <FiSun size={20} /> : <FiMoon size={20} />}
				</Button>
			</div>
		</div>
	);
}

export default ThemeSlider;
