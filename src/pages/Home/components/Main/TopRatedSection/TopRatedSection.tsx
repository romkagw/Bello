import React from 'react';
import { useTranslation } from 'react-i18next';
import TopRatedCard from './TopRatedCard';

function TopRatedSection() {
  const { t } = useTranslation();

  return (
    <section id="top-rated">
      <div className="container">
        <div className="top">
          <h5>{t('top-rated.title')}</h5>
          <h3>{t('top-rated.strong-title')}</h3>
          <p>{t('top-rated.content')}</p>
        </div>
        <div className="cards">
          <TopRatedCard
            className="card-1"
            imgSrc="//src/assets/images/top-rated-1.svg"
            title={t('top-rated.card1.title')}
          >
            {t('top-rated.card1.content')}
            <a href="/#">{t('top-rated.card1.link')}</a>
          </TopRatedCard>
          <TopRatedCard
            className="card-2"
            imgSrc="//src/assets/images/top-rated-2.svg"
            title={t('top-rated.card2.title')}
          >
            {t('top-rated.card2.content')}
          </TopRatedCard>
          <TopRatedCard
            className="card-3"
            imgSrc="//src/assets/images/top-rated-3.svg"
            title={t('top-rated.card3.title')}
          >
            {t('top-rated.card3.content')}
          </TopRatedCard>
        </div>
      </div>
    </section>
  );
}

export default TopRatedSection;
