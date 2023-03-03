import React from 'react';
import ArrowButton from '../Buttons/ArrowButton';

class Promo extends React.Component {
	render() {
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
							<ArrowButton onClick={this.openModal} className='get-my-price'>
								Get my price
							</ArrowButton>
						</div>
						<div className='promo-image' />
					</div>
				</div>
			</section>
		);
	}
}

export default Promo;
