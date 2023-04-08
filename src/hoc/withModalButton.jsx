import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { showModal } from '../store/modules/Modal/reducer';
import { ReactComponent as ArrowPointer } from '../assets/images/Arrow.svg';

const withModalButton = Component => {
	function ButtonWithModal({ className, children, arrowPointer }) {
		const dispatch = useDispatch();

		return (
			<Component onClick={() => dispatch(showModal())} className={className}>
				{children} {arrowPointer && <ArrowPointer />}
			</Component>
		);
	}

	ButtonWithModal.propTypes = {
		className: PropTypes.string,
		children: PropTypes.node.isRequired,
		arrowPointer: PropTypes.bool
	};
	ButtonWithModal.defaultProps = {
		className: '',
		arrowPointer: false
	};

	return ButtonWithModal;
};

export default withModalButton;
