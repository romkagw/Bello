import React from 'react';
import { ReactComponent as ArrowPointer } from '../../assets/images/Arrow.svg';

class ArrowButton extends React.Component {
	render() {
		return (
			<button className={this.props.className}>
				{this.props.text} <ArrowPointer />
			</button>
		);
	}
}

export default ArrowButton;
