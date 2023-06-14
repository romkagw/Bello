import React, { FC } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import './loader.scss';

const Loader: FC = () => {
	return (
		<div className='loader-block'>
			<RotatingLines strokeWidth='2' animationDuration='0.5' />
			<h2>Loading</h2>
		</div>
	);
};

export default Loader;
