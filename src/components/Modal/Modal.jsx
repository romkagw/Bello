import React, { Component } from 'react';

import './modal.scss';

class Modal extends Component {
	render() {
		const { isShow, onClose } = this.props;
		return (
			<>
				{isShow && (
					<div className='modal'>
						<div className='modal-content'>
							<span className='close' onClick={onClose}>
								&times;
							</span>
							{this.props.children}
						</div>
					</div>
				)}
			</>
		);
	}
}

export default Modal;
