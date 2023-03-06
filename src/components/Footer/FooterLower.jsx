import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal } from '../../store/modules/Modal/reducer';

class FooterLower extends Component {
	render() {
		const { dispatch } = this.props;
		return (
			<div id='footer-lower'>
				<div className='container'>
					<div>
						<p>© 2020 Bello insurance Services LLC. All right reserved.</p>
						<button type='button' onClick={() => dispatch(showModal())}>
							Get my price
						</button>
					</div>
				</div>
			</div>
		);
	}
}
FooterLower.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(FooterLower);
