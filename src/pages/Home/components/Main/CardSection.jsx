import React, { Component } from 'react';
import ArrowButton from '../Buttons/ArrowButton';
import Card from '../Card/Card';

class CardSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardData: [
				{
					id: 1,
					title: 'Calculator',
					textCard: 'How much life insurance do I need?',
					textLink: 'Calculate Coverage'
				},
				{
					id: 2,
					title: 'Term vs. perm',
					textCard: 'Term vs. whole life insurance. Which is best for you?',
					textLink: 'See the winner'
				},
				{
					id: 3,
					title: 'Pricing',
					textCard: 'How much does life insurance cost?',
					textLink: 'Tell me more'
				},
				{
					id: 4,
					title: 'Insurance 101',
					textCard: 'The ultimate guide to life insurance.',
					textLink: 'Become an expert'
				}
			]
		};
	}

	render() {
		const { cardData } = this.state;

		return (
			<section id='section-cards'>
				<div className='container'>
					<div className='cards-block'>
						{cardData.map(({ title, textCard, textLink, id }, index) => (
							<Card className={`card${index + 1}`} key={id}>
								<h4>{title}</h4>
								<p>{textCard}</p>
								<ArrowButton>{textLink}</ArrowButton>
							</Card>
						))}
					</div>
				</div>
			</section>
		);
	}
}

export default CardSection;
