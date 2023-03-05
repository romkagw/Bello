import React, { Component } from 'react';
import CardList from './CardList';

class CardSection extends Component {
	render() {
		return (
			<section id='section-cards'>
				<div className='container'>
					<CardList />
				</div>
			</section>
		);
	}
}

export default CardSection;
