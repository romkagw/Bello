import { useTranslation } from 'react-i18next';
import Button from '../../../../../components/Button/Button';
import withModal from '../../../../../hoc/withModalButton';

const ButtonWithModal = withModal(Button);

function GetStartedSection() {
	const { t } = useTranslation();

	return (
		<section id='get-started'>
			<div className='container'>
				<div className='get-started-content'>
					<h3> {t('get-started.title')}</h3>
					<p>{t('get-started.content')}</p>
					<ButtonWithModal className='get-my-price' arrowPointer>
						{t('getMyPrice')}
					</ButtonWithModal>
				</div>
			</div>
		</section>
	);
}

export default GetStartedSection;
