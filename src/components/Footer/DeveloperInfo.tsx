import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function DeveloperInfo() {
	const { t } = useTranslation();

	return (
		<div className='my-info'>
			<Link to='https://github.com/romkagw'>
				{t('footer.myName')} <span>GitHub</span>
			</Link>
			<Link to='https://www.figma.com/file/AWyvCp2CvCgFp1cCcuQOLA/bello?node-id=0%3A1'>
				{t('footer.designLink')}
			</Link>
		</div>
	);
}

export default DeveloperInfo;
