import React, { Component } from 'react';

import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTiktok,
	FaYoutube
} from 'react-icons/fa';
import './App.css';

class App extends Component {
	render() {
		return (
			<>
				<header>
					<div className='header-top'>
						<div className='header-container'>
							<img src='./images/logo.png' alt='logo' />
							<a href='/#'>Life insurance</a>
							<a href='/#'>Why Bello</a>
							<a href='/#'>Help</a>
							<div className='buttons-header'>
								<a className='log-in' href='/#'>
									Log in
								</a>
								<a className='get-price' href='/#'>
									Get my price
								</a>
							</div>
						</div>
					</div>
					<div className='header-main'>
						<div className='container'>
							<div className='header-content'>
								<div className='header-info'>
									<h4>MEET BELLO</h4>
									<h1>A new kind of life insurance</h1>
									<p>
										Secure your family's financial future,
										<br />
										in as little as 10 minutes.
									</p>
									<button className='get-my-price'>
										Get my price{' '}
										<img
											src='./images/Shape.svg'
											alt='button'
										/>
									</button>
								</div>
								<div className='header-image'></div>
							</div>
						</div>
					</div>
				</header>

				<main>
					<section id='stats'>
						<div className='container'>
							<div className='stats-block'>
								<div className='image-stats'>
									<div></div>
									<p>
										<span style={{ color: '#f46752' }}>
											*
										</span>
										Data for illustrative purposes
									</p>
								</div>
								<div className='text-content-stats-block'>
									<h5>Secure your future</h5>
									<h2>It’s more affordable than you think</h2>
									<p>
										Life insurance shouldn’t be confusing or
										expensive. Bello’s term life insurance
										makes protecting your loved ones easy
										and affordable.
									</p>
									<a className='link' href='/#'>
										Get My Price{' '}
										<img
											src='./images/Shape1.svg'
											alt='link'
										/>
									</a>
								</div>
							</div>
						</div>
					</section>

					<section id='help'>
						<div className='container'>
							<div className='help-block'>
								<div className='help-content'>
									<h5>Technology meets service</h5>
									<h3>We're here to help</h3>
									<p>
										Bella, our smart bot, can guide you to
										your perfect policy. There’s also human
										help whenever you need it.
									</p>
									<a className='link' href='/#'>
										Get help{' '}
										<img
											src='./images/Shape1.svg'
											alt='link'
										/>
									</a>
								</div>
								<div className='help-image'></div>
							</div>
						</div>
					</section>

					<section id='top-rated'>
						<div className='container'>
							<div className='top'>
								<h5>Top-Rated Term Life Insurance</h5>
								<h3>You’re in safe hands</h3>
								<p>
									We've partnered with, [insert underwriter],
									one of the world’s largest, most trusted
									insurance companies. This means we can
									ensure reliability in paying Claims.
								</p>
							</div>
							<div className='cards'>
								<div className='card-1'>
									<img
										className='img-top-rated1'
										src='./images/top-rated-1.svg'
										alt='top1'
									/>
									<h6>Top-Rated</h6>
									<p>
										A+ Financial Strength Rating by A.M.
										Best.
										<a href='/#'>What does this mean?</a>
									</p>
								</div>
								<div className='card-2'>
									<img
										className='img-top-rated2'
										src='./images/top-rated-2.svg'
										alt='top2'
									/>
									<h6>Expert guidance</h6>
									<p>
										We've placed millions of dollars in
										coverage people nationwide.
									</p>
								</div>

								<div className='card-3'>
									<img
										className='img-top-rated3'
										src='./images/top-rated-3.svg'
										alt='top3'
									/>
									<h6>We care</h6>
									<p>
										We care about you. We’re a 5 star
										insurance company. Well… Close enough!
									</p>
								</div>
							</div>
						</div>
					</section>
					<section id='instruction'>
						<div className='container'>
							<div className='instruction-title'>
								<h5>How it works</h5>
								<h4>Affordable life insurance in minutes</h4>
								<p>
									We use technology to save you time and money
									– no pushy sales agents, paperwork, or extra
									fees. Just a few clicks and you’re done.
								</p>
							</div>
							<div className='instruction-content'>
								<div className='block-circle'>
									<img
										src='./images/circle.svg'
										alt='circle'
									/>
									<img
										src='./images/circle.svg'
										alt='circle'
									/>
									<img
										src='./images/circle.svg'
										alt='circle'
									/>
								</div>
								<div className='content-list'>
									<img src='./images/1.svg' alt='1' />
									<img src='./images/2.svg' alt='2' />
									<img src='./images/3.svg' alt='3' />
									<h6>Get My Price</h6>
									<h6>Apply</h6>
									<h6>You’re Covered</h6>
									<p>
										Choose the amount that you would like to
										be covered for and we’ll give you a
										quote.
									</p>
									<p>
										Answer a few questions and get your
										final price.
									</p>
									<p>
										Congratulations on securing your loved
										ones financial future!
									</p>
								</div>
							</div>
							<button className='get-my-price'>
								Get my price{' '}
								<img src='./images/Shape.svg' alt='shape' />
							</button>
						</div>
					</section>

					<section id='learning-center'>
						<div className='container'>
							<div className='learning-center-block'>
								<div className='learning-center-image'></div>
								<div className='learning-center-content'>
									<h5>You've Got This</h5>
									<h3>
										Everything you need— completely free
									</h3>
									<p>
										Here’s the latest info, guides, and,
										helpful tools, from the Bello team.
										Learn about life insurance, finances,
										health and wellness.
									</p>
									<a className='link' href='/#'>
										Visit Learning Center
										<img
											src='./images/Shape1.svg'
											alt='Shape'
										/>
									</a>
								</div>
							</div>
						</div>
					</section>

					<section id='section-cards'>
						<div className='container'>
							<div className='cards-block'>
								<div className='card1 boards'>
									<h4>Calculator</h4>
									<p>How much life insurance do I need?</p>
									<a className='link' href='/#'>
										Calculate Coverage{' '}
										<img
											src='./images/Vector1.svg'
											alt='shape'
										/>
									</a>
								</div>
								<div className='card2 boards'>
									<h4>Term vs. perm</h4>
									<p>
										Term vs. whole life insurance. Which is
										best for you?
									</p>
									<a className='link' href='/#'>
										See the winner{' '}
										<img
											src='./images/Vector2.svg'
											alt='shape'
										/>
									</a>
								</div>
								<div className='card3 boards'>
									<h4>Pricing</h4>
									<p>How much does life insurance cost?</p>
									<a className='link' href='/#'>
										Tell me more{' '}
										<img
											src='./images/Vector3.svg'
											alt='shape'
										/>
									</a>
								</div>
								<div className='card4 boards'>
									<h4>Insurance 101</h4>
									<p>The ultimate guide to life insurance.</p>
									<a className='link' href='/#'>
										Become an expert{' '}
										<img
											src='./images/Shape4.svg'
											alt='shape'
										/>
									</a>
								</div>
							</div>
						</div>
					</section>

					<section id='get-started'>
						<div className='container'>
							<div className='get-started-content'>
								<h3>Get Started Today.</h3>
								<p>
									Join the Bello community of people who are
									securing their financial future.
								</p>
								<button className='get-my-price'>
									Get my price{' '}
									<img src='./images/Shape.svg' alt='shape' />
								</button>
							</div>
						</div>
					</section>
				</main>

				<footer>
					<section id='footer-main'>
						<div className='container'>
							<div className='footer-content'>
								<div className='social-media'>
									<img src='./images/logo.png' alt='logo' />
									<p>
										Bello is a trading name of Bello
										Insurance Services LLC. Bello policies
										are issued by [Insert Underwriter here].
									</p>
									<div>
										<input type='text' />
										<button>
											Go{' '}
											<img
												src='./images/Shape.svg'
												alt='shape'
											/>
										</button>
									</div>
									<div id='card-social'>
										<a
											title='facebook'
											href='https://www.facebook.com/'
										>
											<FaFacebookF />
										</a>
										<a
											title='instagram'
											href='https://www.instagram.com/'
										>
											<FaInstagram />
										</a>
										<a
											title='youtube'
											href='https://www.youtube.com/'
										>
											<FaYoutube />
										</a>
										<a
											title='linkedin'
											href='https://www.linkedin.com/'
										>
											<FaLinkedinIn />
										</a>
										<a
											title='tiktok'
											href='https://www.tiktok.com/'
										>
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
					<div id='footer-lower'>
						<div className='container'>
							<div>
								<p>
									© 2020 Bello insurance Services LLC. All
									right reserved.
								</p>
								<a href='/#'>Get my price</a>
							</div>
						</div>
					</div>
					<div className='my-info'>
						<a href='https://github.com/romkagw'>
							Roman Lushpai <span>GitHub</span>
						</a>
						<a href='https://www.figma.com/file/AWyvCp2CvCgFp1cCcuQOLA/bello?node-id=0%3A1'>
							Design Link
						</a>
					</div>
				</footer>
			</>
		);
	}
}

export default App;
