import React from 'react';
import LoginButton from '../Buttons/LoginButton';
import logo from '../../../../assets/images/logo.png';

class HeaderTop extends React.Component {
	render() {
		return (
			<div className='header-top'>
				<div className='header-container'>
					<img src={logo} alt='logo' />
					<a href='/#'>Life insurance</a>
					<a href='/#'>Why Bello</a>
					<a href='/#'>Help</a>
					<div className='buttons-header'>
						<LoginButton />
						<button
							type='button'
							onClick={this.openModal}
							className='get-price'
							href='/#'
						>
							Get my price
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default HeaderTop;
