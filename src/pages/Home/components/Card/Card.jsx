import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

class Card extends React.Component {
	render() {
		const { className, children } = this.props;
		return <div className={`boards ${className}`}>{children}</div>;
	}
}
Card.propTypes = {
	className: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default Card;
