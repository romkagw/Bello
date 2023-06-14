import React, { FC } from 'react';

type ImageProps = {
  src: string;
  alt: string;
};

const Image: FC<ImageProps> = ({ src, alt }) => {
  const handleLoad = (nameImg: string) => {
    console.log(`Image "${nameImg}" loaded`);
  };

  const handleError = (nameImg: string) => {
    // console.error(new Error(`Error loading image - "${nameImg}"`));
  };

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => handleLoad(alt)}
      onError={() => handleError(alt)}
    />
  );
};

export default Image;
