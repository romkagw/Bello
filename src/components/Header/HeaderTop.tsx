import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import Button from '../Button/Button';
import withModal from '../../hoc/withModalButton';
import { useTranslation } from 'react-i18next';

const HeaderTop: React.FC = () => {
  const ButtonWithModal = withModal(Button);
  const { t } = useTranslation();

  return (
    <div className="header-top">
      <div className="header-container">
        <Image src="../../assets/images/logo.png" alt="logo" />
        <img src="logo.png" alt="slices" />
        <Link to="/#">{t('header.top.lifeInsurance')}</Link>
        <Link to="/#">{t('header.top.whyBello')}</Link>
        <Link to="/#">{t('header.top.help')}</Link>
        <div className="buttons-header">
          <Button className="log-in">{t('header.top.logIn')}</Button>
          <ButtonWithModal className="get-price">
            {t('getMyPrice')}
          </ButtonWithModal>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
