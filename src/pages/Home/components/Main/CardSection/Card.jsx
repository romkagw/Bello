import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

class Card extends React.Component {
	render() {
		const { className, children, onDragStart, onDragOver, onDragEnd } =
			this.props;
		return (
			<div
				className={`boards ${className}`}
				draggable
				onDragStart={onDragStart}
				onDragOver={onDragOver}
				onDragEnd={onDragEnd}
			>
				{children}
			</div>
		);
	}
}

Card.propTypes = {
	className: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	onDragStart: PropTypes.func.isRequired,
	onDragOver: PropTypes.func.isRequired,
	onDragEnd: PropTypes.func.isRequired
};

export default Card;
