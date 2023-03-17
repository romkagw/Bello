import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
	handleLoad = nameImg => {
		console.log(`Image "${nameImg}" loaded`);
	};

	handleError = nameImg => {
		console.error(new Error(`Error loading image - "${nameImg}"`));
	};

	render() {
		const { src, alt } = this.props;
		return (
			<img
				src={src}
				alt={alt}
				onLoad={() => this.handleLoad(alt)}
				onError={() => this.handleError(alt)}
			/>
		);
	}
}

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired
};

export default Image;
