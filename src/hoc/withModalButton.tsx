import React, { ReactNode } from 'react';
import { showModal } from '../store/modules/Modal/reducer';
import Image from '../components/Image/Image';
import { useAppDispatch } from '../hooks/redux';

type ButtonProps = {
	onClick?: () => void;
	className?: string;
	children: ReactNode;
	arrowPointer?: boolean;
};

const withModalButton = (Component: React.FC<ButtonProps>) => {
	function ButtonWithModal({ className, children, arrowPointer }: ButtonProps) {
		const dispatch = useAppDispatch();

		return (
			<Component onClick={() => dispatch(showModal())} className={className}>
				{children}{' '}
				{arrowPointer && (
					<Image src='//src/assets/images/Arrow.svg' alt='arrow' />
				)}
			</Component>
		);
	}

	return ButtonWithModal;
};

export default withModalButton;
