import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
	FaFacebookF,
	FaInstagram,
	FaYoutube,
	FaLinkedinIn,
	FaTiktok
} from 'react-icons/fa';
import Image from '../Image/Image';
import Button from '../Button/Button';

const FooterMain: React.FC = () => {
	const { t } = useTranslation();

	return (
		<section id='footer-main'>
			<div className='container'>
				<div className='footer-content'>
					<div className='social-media'>
						<Image src='../../assets/images/logo.png' alt='logo' />
						<p>{t('footer.content')}</p>
						<div>
							<input type='text' />
							<Button arrowPointer>Go</Button>
						</div>
						<div id='card-social'>
							<Link to='https://www.facebook.com/'>
								<FaFacebookF />
							</Link>
							<Link to='https://www.instagram.com/'>
								<FaInstagram />
							</Link>
							<Link to='https://www.youtube.com/'>
								<FaYoutube />
							</Link>
							<Link to='https://www.linkedin.com/'>
								<FaLinkedinIn />
							</Link>
							<Link to='https://www.tiktok.com/'>
								<FaTiktok />
							</Link>
						</div>
					</div>
					<div className='footer-info'>
						<h6>{t('footer.resources')}</h6>
						<h6>{t('footer.magazine')}</h6>
						<h6>{t('footer.more')}</h6>
						<Link to='/#'>{t('footer.termLife')}</Link>
						<Link to='/#'>{t('footer.insurance')}</Link>
						<Link to='/#'>{t('footer.claims')}</Link>
						<Link to='/#'>{t('footer.magazine')}</Link>
						<Link to='/#'>{t('footer.finances')}</Link>
						<Link to='/#'>{t('footer.terms')}</Link>
						<Link to='/#'>{t('footer.lifeInsurance')}</Link>
						<Link to='/#'>{t('footer.health')}</Link>
						<Link to='/#'>{t('footer.privacy')}</Link>
						<Link to='/#'>{t('footer.contact')}</Link>
						<Link to='/#'>{t('footer.updates')}</Link>
						<Link to='/#'>{t('footer.licenses')}</Link>
						<Link to='/#'>{t('footer.FAQs')}</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FooterMain;
