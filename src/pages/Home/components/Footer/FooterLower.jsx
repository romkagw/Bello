import React, { Component } from 'react';

class FooterLower extends Component {
	render() {
		return (
			<div id='footer-lower'>
				<div className='container'>
					<div>
						<p>© 2020 Bello insurance Services LLC. All right reserved.</p>
						<button type='button' onClick={this.openModal}>
							Get my price
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default FooterLower;
