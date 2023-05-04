import { useTranslation } from 'react-i18next';
import CardList from './CardList';

function CardSection() {
	const { t } = useTranslation();

	const listCards = [
		{
			id: 1,
			order: 1,
			title: t('listCards.card1.title'),
			textCard: t('listCards.card1.textCard'),
			textLink: t('listCards.card1.textLink'),
			hide: false
		},
		{
			id: 2,
			order: 2,
			title: t('listCards.card2.title'),
			textCard: t('listCards.card2.textCard'),
			textLink: t('listCards.card2.textLink'),
			hide: false
		},
		{
			id: 3,
			order: 3,
			title: t('listCards.card3.title'),
			textCard: t('listCards.card3.textCard'),
			textLink: t('listCards.card3.textLink'),
			hide: false
		},
		{
			id: 4,
			order: 4,
			title: t('listCards.card4.title'),
			textCard: t('listCards.card4.textCard'),
			textLink: t('listCards.card4.textLink'),
			hide: false
		}
	];

	return (
		<section id='section-cards'>
			<div className='container'>
				<CardList list={listCards} />
			</div>
		</section>
	);
}

export default CardSection;
