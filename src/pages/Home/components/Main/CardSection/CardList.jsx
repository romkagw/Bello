import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Card from './Card';
import Button from '../../../../../components/Button/Button';
import './card.scss';

function CardList({ list }) {
	const [cardList, setCardList] = useState(list);
	const { i18n } = useTranslation();

	useEffect(() => {
		setCardList(list);
	}, [list]);

	const [currentCard, setCurrentCard] = useState(null);

	const dragStartHandler = (card, index) => {
		setCardList(prevCardList => {
			return prevCardList.map((c, i) => {
				return i === index ? { ...card, hide: true } : c;
			});
		});
		setCurrentCard(card);
	};

	const dragOverHandler = (e, card) => {
		e.preventDefault();
		if (currentCard) {
			const draggedCardIndex = cardList.findIndex(c => c.id === currentCard.id);
			const currentCardIndex = cardList.findIndex(c => c.id === card.id);
			const updatedCardList = [...cardList];

			const tempOrder = updatedCardList[draggedCardIndex].order;

			updatedCardList[draggedCardIndex] = {
				...updatedCardList[draggedCardIndex],
				order: updatedCardList[currentCardIndex].order
			};
			updatedCardList[currentCardIndex] = {
				...updatedCardList[currentCardIndex],
				order: tempOrder
			};

			setCardList(updatedCardList);
		}
	};

	const dragEndHandler = () => {
		const updatedCardList = [...cardList].map(card => {
			return card.hide ? { ...card, hide: false } : card;
		});
		setCardList(updatedCardList);
		setCurrentCard(null);
	};

	const sortCards = (a, b) => (a.order > b.order ? 1 : -1);

	return (
		<div className='cards-block'>
			{cardList.sort(sortCards).map((card, index) => (
				<Card
					onDragStart={() => dragStartHandler(card, index)}
					onDragOver={e => dragOverHandler(e, card)}
					onDragEnd={dragEndHandler}
					className={`card${card.id} ${card.hide && 'hide'} ${
						i18n.language === 'ua' && 'card_ua'
					}`}
					key={card.id}
				>
					<h4>{card.title}</h4>
					<p>{card.textCard}</p>
					<Button arrowPointer>{card.textLink}</Button>
				</Card>
			))}
		</div>
	);
}
CardList.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			order: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			textCard: PropTypes.string.isRequired,
			textLink: PropTypes.string.isRequired,
			hide: PropTypes.bool.isRequired
		})
	).isRequired
};

export default CardList;
