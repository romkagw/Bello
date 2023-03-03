import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

class Modal extends Component {
	render() {
		const { isShow, onClose, children } = this.props;
		return (
			<div>
				{isShow && (
					<div className='modal'>
						<div className='modal-content'>
							<button type='button' className='close' onClick={onClose}>
								×
							</button>
							{children}
						</div>
					</div>
				)}
			</div>
		);
	}
}

Modal.propTypes = {
	isShow: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
};

export default Modal;
