import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal } from '../../store/modules/Modal/reducer';
import Button from '../Button/Button';

class Promo extends React.Component {
	render() {
		const { dispatch } = this.props;
		return (
			<section className='promo'>
				<div className='container'>
					<div className='promo-content'>
						<div className='promo-info'>
							<h4>MEET BELLO</h4>
							<h1>A new kind of life insurance</h1>
							<p>
								Secure your family&apos;s financial future,
								<br />
								in as little as 10 minutes.
							</p>
							<Button
								className='get-my-price'
								onClick={() => dispatch(showModal())}
								arrowPointer
							>
								Get my price
							</Button>
						</div>
						<div className='promo-image' />
					</div>
				</div>
			</section>
		);
	}
}
Promo.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(Promo);
