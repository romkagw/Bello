import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowPointer } from '../../assets/images/Arrow.svg';

class ArrowButton extends React.Component {
	render() {
		const { onClick, className, children } = this.props;

		return (
			<button type='button' onClick={onClick} className={className}>
				{children} <ArrowPointer />
			</button>
		);
	}
}

ArrowButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	children: PropTypes.node
};
ArrowButton.defaultProps = {
	className: '',
	children: null
};

export default ArrowButton;
