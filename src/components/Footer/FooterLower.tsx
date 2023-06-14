import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import withModal from '../../hoc/withModalButton';

const FooterLower: React.FC = () => {
	const ButtonWithModal = withModal(Button);
	const { t } = useTranslation();

	return (
		<div id='footer-lower'>
			<div className='container'>
				<div>
					<p>{t('footer.lowerTextContent')}</p>
					<ButtonWithModal>{t('getMyPrice')}</ButtonWithModal>
				</div>
			</div>
		</div>
	);
};

export default FooterLower;
