import React, { Component } from 'react';
import {
	FaFacebookF,
	FaInstagram,
	FaYoutube,
	FaLinkedinIn,
	FaTiktok
} from 'react-icons/fa';
import logo from '../../../../assets/images/logo.png';
import Button from '../Button/Button';

class FooterMain extends Component {
	render() {
		return (
			<section id='footer-main'>
				<div className='container'>
					<div className='footer-content'>
						<div className='social-media'>
							<img src={logo} alt='logo' />
							<p>
								Bello is a trading name of Bello Insurance Services LLC. Bello
								policies are issued by [Insert Underwriter here].
							</p>
							<div>
								<input type='text' />
								<Button arrowPointer>Go</Button>
							</div>
							<div id='card-social'>
								<a title='facebook' href='https://www.facebook.com/'>
									<FaFacebookF />
								</a>
								<a title='instagram' href='https://www.instagram.com/'>
									<FaInstagram />
								</a>
								<a title='youtube' href='https://www.youtube.com/'>
									<FaYoutube />
								</a>
								<a title='linkedin' href='https://www.linkedin.com/'>
									<FaLinkedinIn />
								</a>
								<a title='tiktok' href='https://www.tiktok.com/'>
									<FaTiktok />
								</a>
							</div>
						</div>
						<div className='footer-info'>
							<h6>Resources</h6>
							<h6>Magazine</h6>
							<h6>More</h6>
							<a href='/#'>Term life insurance plans</a>
							<a href='/#'>Insurance</a>
							<a href='/#'>Claims</a>
							<a href='/#'>Insurance calculator</a>
							<a href='/#'>Finances</a>
							<a href='/#'>Terms</a>
							<a href='/#'>Guide to life insurance</a>
							<a href='/#'>Health</a>
							<a href='/#'>Privacy</a>
							<a href='/#'>Contact</a>
							<a href='/#'>Updates</a>
							<a href='/#'>Licenses</a>
							<a href='/#'>FAQs</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default FooterMain;
