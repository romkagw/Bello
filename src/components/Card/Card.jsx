import React from 'react';
import './card.scss';

class Card extends React.Component {
	render() {
		return (
			<div className={'boards ' + this.props.className}>
				{this.props.children}
			</div>
		);
	}
}

export default Card;
