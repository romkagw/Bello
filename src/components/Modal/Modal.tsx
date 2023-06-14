import React, { useEffect } from 'react';
import './modal.scss';
import { hideModal } from '../../store/modules/Modal/reducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

interface ModalProps {
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
	const { isModalVisible } = useAppSelector(state => state.modal);
	const dispatch = useAppDispatch();

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
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
};

export default Modal;
