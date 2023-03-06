import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../../../assets/images/logo.png';
import { showModal } from '../../../../store/modules/Modal/reducer';
import Button from '../Button/Button';
import Image from '../../../../components/Image/Image';

class HeaderTop extends React.Component {
	render() {
		const { dispatch } = this.props;

		return (
			<div className='header-top'>
				<div className='header-container'>
					<Image src={logo} alt='logo' />
					<a href='/#'>Life insurance</a>
					<a href='/#'>Why Bello</a>
					<a href='/#'>Help</a>
					<div className='buttons-header'>
						<Button className='log-in'>Log in</Button>
						<Button className='get-price' onClick={() => dispatch(showModal())}>
							Get my price
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
HeaderTop.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(HeaderTop);
