import React from 'react';
import ArrowButton from '../Buttons/ArrowButton';

class HelpSection extends React.Component {
	render() {
		return (
			<section id='help'>
				<div className='container'>
					<div className='help-block'>
						<div className='help-content'>
							<h5>Technology meets service</h5>
							<h3>We&apos;re here to help</h3>
							<p>
								Bella, our smart bot, can guide you to your perfect policy.
								There’s also human help whenever you need it.
							</p>
							<ArrowButton>Get help</ArrowButton>
						</div>
						<div className='help-image' />
					</div>
				</div>
			</section>
		);
	}
}

export default HelpSection;
