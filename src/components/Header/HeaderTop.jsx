import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import Image from '../Image/Image';
import Button from '../Button/Button';
import { showModal } from '../../store/modules/Modal/reducer';

class HeaderTop extends React.Component {
	render() {
		const { showModalAction } = this.props;

		return (
			<div className='header-top'>
				<div className='header-container'>
					<Image src={logo} alt='logo' />
					<a href='/#'>Life insurance</a>
					<a href='/#'>Why Bello</a>
					<a href='/#'>Help</a>
					<div className='buttons-header'>
						<Button className='log-in'>Log in</Button>
						<Button className='get-price' onClick={showModalAction}>
							Get my price
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
HeaderTop.propTypes = {
	showModalAction: PropTypes.func.isRequired
};

const mapDispatchToProps = {
	showModalAction: showModal
};

export default connect(null, mapDispatchToProps)(HeaderTop);
