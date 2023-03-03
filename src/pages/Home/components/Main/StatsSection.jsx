import React from 'react';
import ArrowButton from '../Buttons/ArrowButton';

class StatsSection extends React.Component {
	render() {
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
							<ArrowButton onClick={this.openModal}>Get My Price</ArrowButton>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default StatsSection;
