import { useTranslation } from 'react-i18next';
import TopRatedCard from './TopRatedCard';
import card1 from '../../../../../assets/images/top-rated-1.svg';
import card2 from '../../../../../assets/images/top-rated-2.svg';
import card3 from '../../../../../assets/images/top-rated-3.svg';

function TopRatedSection() {
	const { t } = useTranslation();

	return (
		<section id='top-rated'>
			<div className='container'>
				<div className='top'>
					<h5>{t('top-rated.title')}</h5>
					<h3>{t('top-rated.strong-title')}</h3>
					<p>{t('top-rated.content')}</p>
				</div>
				<div className='cards'>
					<TopRatedCard
						className='card-1'
						imgSrc={card1}
						title={t('top-rated.card1.title')}
					>
						{t('top-rated.card1.content')}
						<a href='/#'>{t('top-rated.card1.link')}</a>
					</TopRatedCard>
					<TopRatedCard
						className='card-2'
						imgSrc={card2}
						title={t('top-rated.card2.title')}
					>
						{t('top-rated.card2.content')}
					</TopRatedCard>
					<TopRatedCard
						className='card-3'
						imgSrc={card3}
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
