import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import './language-switcher.scss';

function LanguageSwitcher() {
	const [currentLanguage, setCurrentLanguage] = useState(
		localStorage.getItem('i18nextLng')
	);

	const { i18n } = useTranslation();

	const changeLanguage = language => {
		i18n.changeLanguage(language);
		setCurrentLanguage(language);
	};
	useEffect(() => {
		document.documentElement.style.setProperty(
			'--main-font',
			currentLanguage === 'ua' ? 'Inter, sans-serif' : 'Work Sans'
		);
	}, [currentLanguage]);

	const [showSwitcher] = useState(false);

	return (
		<div className={`language-switcher ${showSwitcher ? 'actives' : ''} `}>
			<Button
				onClick={() => changeLanguage('ua')}
				className=' language-ukraine'
			>
				{' '}
			</Button>
			<Button
				onClick={() => changeLanguage('en')}
				className='language-united-kingdom'
			>
				{' '}
			</Button>
		</div>
	);
}

export default LanguageSwitcher;
