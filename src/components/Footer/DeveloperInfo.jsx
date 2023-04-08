import { Link } from 'react-router-dom';

function DeveloperInfo() {
	return (
		<div className='my-info'>
			<Link to='https://github.com/romkagw'>
				Roman Lushpai <span>GitHub</span>
			</Link>
			<Link to='https://www.figma.com/file/AWyvCp2CvCgFp1cCcuQOLA/bello?node-id=0%3A1'>
				Design Link
			</Link>
		</div>
	);
}

export default DeveloperInfo;
