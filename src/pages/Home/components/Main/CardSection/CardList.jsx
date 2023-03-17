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
					textLink: 'Calculate Coverage',
					hide: false
				},
				{
					id: 2,
					order: 2,
					title: 'Term vs. perm',
					textCard: 'Term vs. whole life insurance. Which is best for you?',
					textLink: 'See the winner',
					hide: false
				},
				{
					id: 3,
					order: 3,
					title: 'Pricing',
					textCard: 'How much does life insurance cost?',
					textLink: 'Tell me more',
					hide: false
				},
				{
					id: 4,
					order: 4,
					title: 'Insurance 101',
					textCard: 'The ultimate guide to life insurance.',
					textLink: 'Become an expert',
					hide: false
				}
			],
			currentCard: null
		};
	}

	dragStartHandler = card => {
		const { cardList } = this.state;
		const indexCard = cardList.indexOf(card);
		const updatedCardList = [...cardList];

		updatedCardList[indexCard] = { ...card, hide: true };
		this.setState({ cardList: updatedCardList, currentCard: card });
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

	dragEndHandler = () => {
		const { cardList } = this.state;

		const updatedCardList = [...cardList].map(card => {
			return card.hide ? { ...card, hide: false } : card;
		});
		this.setState({ cardList: updatedCardList, currentCard: null });
	};

	sortCards = (a, b) => (a.order > b.order ? 1 : -1);

	render() {
		const { cardList } = this.state;
		const sortedCardList = [...cardList].sort(this.sortCards);

		return (
			<div className='cards-block'>
				{sortedCardList.map(card => (
					<Card
						onDragStart={() => this.dragStartHandler(card)}
						onDragOver={e => this.dragOverHandler(e, card)}
						onDragEnd={() => this.dragEndHandler()}
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
}

export default CardList;
