import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../../../../components/Image/Image';

class TopRatedCard extends React.Component {
	render() {
		const { imgSrc, title, children, className } = this.props;

		return (
			<div className={className}>
				<Image src={imgSrc} alt={title} />
				<h6>{title}</h6>
				<p>{children}</p>
			</div>
		);
	}
}

TopRatedCard.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string.isRequired
};

export default TopRatedCard;
