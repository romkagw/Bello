import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../../../components/Button/Button';
import withModal from '../../../../../hoc/withModalButton';

const ButtonWithModal = withModal(Button);

function StatsSection() {
  const { t } = useTranslation();

  return (
    <section id="stats">
      <div className="container">
        <div className="stats-block">
          <div className="image-stats">
            <div />
            <p>
              <span>*</span>
              {t('stats.img-paragraph')}
            </p>
          </div>
          <div className="text-content-stats-block">
            <h5>{t('stats.title')}</h5>
            <h2>{t('stats.strong-title')}</h2>
            <p>{t('stats.content')}</p>
            <ButtonWithModal arrowPointer>{t('getMyPrice')}</ButtonWithModal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
