import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import withModal from '../../hoc/withModalButton';
import ThemeSlider from '../ThemeSlider/ThemeSlider';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const ButtonWithModal = withModal(Button);

function Promo() {
	const { t } = useTranslation();
	return (
		<section className='promo'>
			<ThemeSlider />
			<LanguageSwitcher />
			<div className='container'>
				<div className='promo-content'>
					<div className='promo-info'>
						<h4>{t('header.promo.h4')}</h4>
						<h1>{t('header.promo.h1')}</h1>
						<p>{t('header.promo.p')}</p>
						<ButtonWithModal className='get-my-price' arrowPointer>
							{t('getMyPrice')}
						</ButtonWithModal>
					</div>
					<div className='promo-image' />
				</div>
			</div>
		</section>
	);
}

export default Promo;
