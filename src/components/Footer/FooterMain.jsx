import { Link } from 'react-router-dom';
import {
	FaFacebookF,
	FaInstagram,
	FaYoutube,
	FaLinkedinIn,
	FaTiktok
} from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import Image from '../Image/Image';
import Button from '../Button/Button';

function FooterMain() {
	return (
		<section id='footer-main'>
			<div className='container'>
				<div className='footer-content'>
					<div className='social-media'>
						<Image src={logo} alt='logo' />
						<p>
							Bello is a trading name of Bello Insurance Services LLC. Bello
							policies are issued by [Insert Underwriter here].
						</p>
						<div>
							<input type='text' />
							<Button arrowPointer>Go</Button>
						</div>
						<div id='card-social'>
							<Link to='facebook' href='https://www.facebook.com/'>
								<FaFacebookF />
							</Link>
							<Link to='instagram' href='https://www.instagram.com/'>
								<FaInstagram />
							</Link>
							<Link to='youtube' href='https://www.youtube.com/'>
								<FaYoutube />
							</Link>
							<Link to='linkedin' href='https://www.linkedin.com/'>
								<FaLinkedinIn />
							</Link>
							<Link to='tiktok' href='https://www.tiktok.com/'>
								<FaTiktok />
							</Link>
						</div>
					</div>
					<div className='footer-info'>
						<h6>Resources</h6>
						<h6>Magazine</h6>
						<h6>More</h6>
						<Link to='/#'>Term life insurance plans</Link>
						<Link to='/#'>Insurance</Link>
						<Link to='/#'>Claims</Link>
						<Link to='/#'>Insurance calculator</Link>
						<Link to='/#'>Finances</Link>
						<Link to='/#'>Terms</Link>
						<Link to='/#'>Guide to life insurance</Link>
						<Link to='/#'>Health</Link>
						<Link to='/#'>Privacy</Link>
						<Link to='/#'>Contact</Link>
						<Link to='/#'>Updates</Link>
						<Link to='/#'>Licenses</Link>
						<Link to='/#'>FAQs</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FooterMain;
