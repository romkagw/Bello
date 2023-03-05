import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal } from '../../../../../store/modules/Modal/reducer';
import Button from '../../Button/Button';

class StatsSection extends React.Component {
	render() {
		const { dispatch } = this.props;
		return (
			<section id='stats'>
				<div className='container'>
					<div className='stats-block'>
						<div className='image-stats'>
							<div />
							<p>
								<span style={{ color: '#f46752' }}>*</span>
								Data for illustrative purposes
							</p>
						</div>
						<div className='text-content-stats-block'>
							<h5>Secure your future</h5>
							<h2>It’s more affordable than you think</h2>
							<p>
								Life insurance shouldn’t be confusing or expensive. Bello’s term
								life insurance makes protecting your loved ones easy and
								affordable.
							</p>
							<Button arrowPointer onClick={() => dispatch(showModal())}>
								Get My Price
							</Button>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
StatsSection.propTypes = {
	dispatch: PropTypes.func.isRequired
};
export default connect()(StatsSection);
