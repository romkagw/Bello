import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowPointer } from '../../../../assets/images/Arrow.svg';

class Button extends React.Component {
	render() {
		const { onClick, className, children, arrowPointer } = this.props;

		return (
			<button type='button' onClick={onClick} className={className}>
				{children} {arrowPointer && <ArrowPointer />}
			</button>
		);
	}
}

Button.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	arrowPointer: PropTypes.bool
};
Button.defaultProps = {
	onClick: null,
	className: '',
	arrowPointer: false
};

export default Button;
