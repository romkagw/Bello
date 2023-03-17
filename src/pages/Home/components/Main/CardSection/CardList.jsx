import React from 'react';
import Card from './Card';
import Button from '../../../../../components/Button/Button';

class CardList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cardList: [
				{
					id: 1,
					order: 1,
					title: 'Calculator',
					textCard: 'How much life insurance do I need?',
					textLink: 'Calculate Coverage'
				},
				{
					id: 2,
					order: 2,
					title: 'Term vs. perm',
					textCard: 'Term vs. whole life insurance. Which is best for you?',
					textLink: 'See the winner'
				},
				{
					id: 3,
					order: 3,
					title: 'Pricing',
					textCard: 'How much does life insurance cost?',
					textLink: 'Tell me more'
				},
				{
					id: 4,
					order: 4,
					title: 'Insurance 101',
					textCard: 'The ultimate guide to life insurance.',
					textLink: 'Become an expert'
				}
			],
			currentCard: null
		};
	}

	dragStartHandler = (e, card) => {
		this.setState({ currentCard: card });

		setTimeout(() => {
			e.target.classList.add('hide');
		}, 0);
	};

	dragOverHandler = (e, card) => {
		e.preventDefault();
		const { cardList, currentCard } = this.state;
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

			this.setState({
				cardList: updatedCardList
			});
		}
	};

	dragEndHandler = e => {
		e.target.classList.remove('hide');
		/* важный момент, если не убирать после окончания драгинга
		 значение из  "currentCard" то драгинг будет срабатывать
		  при любом перетягивании над зоной дропа
		 */
		this.setState({ currentCard: null });
	};

	sortCards = (a, b) => (a.order > b.order ? 1 : -1);

	render() {
		const { cardList } = this.state;

		return (
			<div className='cards-block'>
				{cardList.sort(this.sortCards).map(card => (
					<Card
						onDragStart={e => this.dragStartHandler(e, card)}
						onDragOver={e => this.dragOverHandler(e, card)}
						onDragEnd={e => this.dragEndHandler(e)}
						className={`card${card.id}`}
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
}

export default CardList;
