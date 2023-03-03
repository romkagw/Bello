import React, { Component } from 'react';
import ArrowButton from '../Buttons/ArrowButton';

class GetStartedSection extends Component {
	render() {
		return (
			<section id='get-started'>
				<div className='container'>
					<div className='get-started-content'>
						<h3>Get Started Today.</h3>
						<p>
							Join the Bello community of people who are securing their
							financial future.
						</p>
						<ArrowButton className='get-my-price'>Get my price</ArrowButton>
					</div>
				</div>
			</section>
		);
	}
}

export default GetStartedSection;
