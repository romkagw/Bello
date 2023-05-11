// eslint-disable-next-line import/no-extraneous-dependencies
import { RotatingLines } from 'react-loader-spinner';
import './loader.scss';

export default function Loader() {
	return (
		<div className='loader-block'>
			<RotatingLines strokeWidth='2' animationDuration='0.5' />
			<h2>Loading</h2>
		</div>
	);
}
