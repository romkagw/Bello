import React, { ReactNode } from 'react';
import Image from '../Image/Image';

type ButtonProps = {
	onClick?: () => void;
	className?: string;
	children: ReactNode;
	arrowPointer?: boolean;
};

const Button = ({
	onClick,
	className,
	children,
	arrowPointer
}: ButtonProps) => {
	return (
		<button type='button' onClick={onClick} className={className}>
			{children}{' '}
			{arrowPointer && (
				<Image src='../../assets/images/Arrow.svg' alt='arrow' />
			)}
		</button>
	);
};

export default Button;
