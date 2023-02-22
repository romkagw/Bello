import React from 'react';
import { ReactComponent as ArrowPointer } from '../../assets/images/Arrow.svg';

class ArrowButton extends React.Component {
	render() {
		const { onClick, className, children } = this.props;

		return (
			<button onClick={onClick} className={className}>
				{children} <ArrowPointer />
			</button>
		);
	}
}

export default ArrowButton;
