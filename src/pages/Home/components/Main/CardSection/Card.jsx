import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

function Card({ className, children, onDragStart, onDragOver, onDragEnd }) {
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

Card.propTypes = {
	className: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	onDragStart: PropTypes.func.isRequired,
	onDragOver: PropTypes.func.isRequired,
	onDragEnd: PropTypes.func.isRequired
};

export default Card;
