import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../../store/modules/Modal/reducer';

function Modal({ children }) {
	const isModalVisible = useSelector(state => state.modal.isModalVisible);
	const dispatch = useDispatch();

	const handleKeyDown = event => {
		if (event.keyCode === 27) {
			dispatch(hideModal());
		}
	};
	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<div>
			{isModalVisible && (
				<div className='modal'>
					<div className='modal-content'>
						<button
							type='button'
							className='close'
							onClick={() => dispatch(hideModal())}
						>
							×
						</button>
						{children}
					</div>
				</div>
			)}
		</div>
	);
}

Modal.propTypes = {
	children: PropTypes.node.isRequired
};

export default Modal;
