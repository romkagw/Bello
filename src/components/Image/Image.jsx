import PropTypes from 'prop-types';

function Image({ src, alt }) {
	const handleLoad = nameImg => {
		console.log(`Image "${nameImg}" loaded`);
	};

	const handleError = nameImg => {
		console.error(new Error(`Error loading image - "${nameImg}"`));
	};

	return (
		<img
			src={src}
			alt={alt}
			onLoad={() => handleLoad(alt)}
			onError={() => handleError(alt)}
		/>
	);
}

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired
};

export default Image;
