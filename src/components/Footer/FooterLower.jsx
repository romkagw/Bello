import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import withModal from '../../hoc/withModalButton';

const ButtonWithModal = withModal(Button);

function FooterLower() {
	const { t } = useTranslation();

	return (
		<div id='footer-lower'>
			<div className='container'>
				<div>
					<p>{t('footer.lowerTextContent')}</p>
					<ButtonWithModal type='button'>{t('getMyPrice')}</ButtonWithModal>
				</div>
			</div>
		</div>
	);
}

export default FooterLower;
