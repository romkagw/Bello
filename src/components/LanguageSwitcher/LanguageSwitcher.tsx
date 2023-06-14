import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import './language-switcher.scss';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--main-font',
      i18n.language === 'ua' ? 'Inter, sans-serif' : 'Work Sans'
    );
  }, [i18n.language]);

  const [showSwitcher] = useState(false);

  return (
    <div className={`language-switcher ${showSwitcher ? 'actives' : ''}`}>
      <Button
        onClick={() => changeLanguage('ua')}
        className=" language-ukraine"
      >
        {' '}
      </Button>
      <Button
        onClick={() => changeLanguage('en')}
        className="language-united-kingdom"
      >
        {' '}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
