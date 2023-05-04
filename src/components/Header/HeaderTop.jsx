import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/logo.png';
import Image from '../Image/Image';
import Button from '../Button/Button';
import withModal from '../../hoc/withModalButton';

const ButtonWithModal = withModal(Button);

function HeaderTop() {
	const { t } = useTranslation();

	return (
		<div className='header-top'>
			<div className='header-container'>
				<Image src={logo} alt='logo' />
				<Link to='/#'>{t('header.top.lifeInsurance')}</Link>
				<Link to='/#'>{t('header.top.whyBello')}</Link>
				<Link to='/#'>{t('header.top.help')}</Link>
				<div className='buttons-header'>
					<Button className='log-in'>{t('header.top.logIn')}</Button>
					<ButtonWithModal className='get-price'>
						{t('getMyPrice')}
					</ButtonWithModal>
				</div>
			</div>
		</div>
	);
}

export default HeaderTop;
