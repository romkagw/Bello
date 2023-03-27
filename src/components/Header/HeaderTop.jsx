import React from 'react';
import logo from '../../assets/images/logo.png';
import Image from '../Image/Image';
import Button from '../Button/Button';
import withModal from '../../hoc/withModalButton';

const ButtonWithModal = withModal(Button);

class HeaderTop extends React.Component {
	render() {
		return (
			<div className='header-top'>
				<div className='header-container'>
					<Image src={logo} alt='logo' />
					<a href='/#'>Life insurance</a>
					<a href='/#'>Why Bello</a>
					<a href='/#'>Help</a>
					<div className='buttons-header'>
						<Button className='log-in'>Log in</Button>
						<ButtonWithModal className='get-price'>
							Get my price
						</ButtonWithModal>
					</div>
				</div>
			</div>
		);
	}
}

export default HeaderTop;
