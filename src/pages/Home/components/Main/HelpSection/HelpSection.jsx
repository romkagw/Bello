import { useTranslation } from 'react-i18next';
import Button from '../../../../../components/Button/Button';

function HelpSection() {
	const { t } = useTranslation();

	return (
		<section id='help'>
			<div className='container'>
				<div className='help-block'>
					<div className='help-content'>
						<h5>{t('help.title')}</h5>
						<h3>{t('help.strong-title')}</h3>
						<p>{t('help.content')}</p>
						<Button arrowPointer>{t('help.getHelp')}</Button>
					</div>
					<div className='help-image' />
				</div>
			</div>
		</section>
	);
}

export default HelpSection;
