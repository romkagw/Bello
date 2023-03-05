import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal } from '../../../../../store/modules/Modal/reducer';
import ArrowButton from '../../Buttons/ArrowButton';

class GetStartedSection extends Component {
	render() {
		const { dispatch } = this.props;
		return (
			<section id='get-started'>
				<div className='container'>
					<div className='get-started-content'>
						<h3>Get Started Today.</h3>
						<p>
							Join the Bello community of people who are securing their
							financial future.
						</p>
						<ArrowButton
							onClick={() => dispatch(showModal())}
							className='get-my-price'
						>
							Get my price
						</ArrowButton>
					</div>
				</div>
			</section>
		);
	}
}
GetStartedSection.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(GetStartedSection);
