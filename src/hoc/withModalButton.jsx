import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal } from '../store/modules/Modal/reducer';
import { ReactComponent as ArrowPointer } from '../assets/images/Arrow.svg';

const withModalButton = Component => {
	class ButtonWithModal extends React.Component {
		render() {
			const { className, children, showModalAction, arrowPointer } = this.props;

			return (
				<Component onClick={() => showModalAction()} className={className}>
					{children} {arrowPointer && <ArrowPointer />}
				</Component>
			);
		}
	}

	ButtonWithModal.propTypes = {
		className: PropTypes.string,
		children: PropTypes.node.isRequired,
		showModalAction: PropTypes.func.isRequired,
		arrowPointer: PropTypes.bool
	};
	ButtonWithModal.defaultProps = {
		className: '',
		arrowPointer: false
	};

	return connect(null, { showModalAction: showModal })(ButtonWithModal);
};

export default withModalButton;
