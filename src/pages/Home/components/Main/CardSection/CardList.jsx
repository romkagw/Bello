import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Button from '../../../../../components/Button/Button';

function CardList({ list }) {
	const [cardList, setCardList] = useState(list);

	const [currentCard, setCurrentCard] = useState(null);

	const dragStartHandler = card => {
		const indexCard = cardList.indexOf(card);
		const updatedCardList = [...cardList];

		updatedCardList[indexCard] = { ...card, hide: true };
		setCardList(updatedCardList);
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
			{cardList.sort(sortCards).map(card => (
				<Card
					onDragStart={() => dragStartHandler(card)}
					onDragOver={e => dragOverHandler(e, card)}
					onDragEnd={dragEndHandler}
					className={`card${card.id} ${card.hide && 'hide'}`}
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
