import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginButton from '../Buttons/LoginButton';
import logo from '../../../../assets/images/logo.png';
import { showModal } from '../../../../store/modules/Modal/reducer';

class HeaderTop extends React.Component {
	render() {
		const { dispatch } = this.props;

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
							onClick={() => dispatch(showModal())}
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
HeaderTop.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(HeaderTop);
