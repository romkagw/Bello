import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal } from '../../../../../store/modules/Modal/reducer';
import Button from '../../../../../components/Button/Button';

class GetStartedSection extends Component {
	render() {
		const { showModalAction } = this.props;
		return (
			<section id='get-started'>
				<div className='container'>
					<div className='get-started-content'>
						<h3>Get Started Today.</h3>
						<p>
							Join the Bello community of people who are securing their
							financial future.
						</p>
						<Button
							className='get-my-price'
							onClick={showModalAction}
							arrowPointer
						>
							Get my price
						</Button>
					</div>
				</div>
			</section>
		);
	}
}
GetStartedSection.propTypes = {
	showModalAction: PropTypes.func.isRequired
};

const mapDispatchToProps = {
	showModalAction: showModal
};

export default connect(null, mapDispatchToProps)(GetStartedSection);
