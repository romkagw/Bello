import React from 'react';
import Button from '../Button/Button';
import withModal from '../../hoc/withModalButton';
import ThemeSlider from '../ThemeSlider/ThemeSlider';

const ButtonWithModal = withModal(Button);
class Promo extends React.Component {
	render() {
		return (
			<section className='promo'>
				<ThemeSlider />
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
							<ButtonWithModal className='get-my-price' arrowPointer>
								Get my price
							</ButtonWithModal>
						</div>
						<div className='promo-image' />
					</div>
				</div>
			</section>
		);
	}
}

export default Promo;
