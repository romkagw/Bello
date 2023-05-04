import { useTranslation } from 'react-i18next';
import Button from '../../../../../components/Button/Button';

function LearningCenterSection() {
	const { t } = useTranslation();

	return (
		<section id='learning-center'>
			<div className='container'>
				<div className='learning-center-block'>
					<div className='learning-center-image' />
					<div className='learning-center-content'>
						<h5>{t('learning-center.title')}</h5>
						<h3>{t('learning-center.strong-title')}</h3>
						<p>{t('learning-center.content')}</p>
						<Button arrowPointer>{t('learning-center.text-button')}</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LearningCenterSection;
