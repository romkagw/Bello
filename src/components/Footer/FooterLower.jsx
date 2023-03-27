import React, { Component } from 'react';
import Button from '../Button/Button';
import withModal from '../../hoc/withModalButton';

const ButtonWithModal = withModal(Button);

class FooterLower extends Component {
	render() {
		return (
			<div id='footer-lower'>
				<div className='container'>
					<div>
						<p>© 2020 Bello insurance Services LLC. All right reserved.</p>
						<ButtonWithModal type='button'>Get my price</ButtonWithModal>
					</div>
				</div>
			</div>
		);
	}
}

export default FooterLower;
