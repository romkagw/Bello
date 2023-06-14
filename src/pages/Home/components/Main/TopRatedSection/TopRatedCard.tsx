import React from 'react';
import Image from '../../../../../components/Image/Image';

interface TopRatedCardProps {
  imgSrc: string;
  title: string;
  children: React.ReactNode;
  className: string;
}

function TopRatedCard({
  imgSrc,
  title,
  children,
  className,
}: TopRatedCardProps) {
  return (
    <div className={className}>
      <Image src={imgSrc} alt={title} />
      <h6>{title}</h6>
      <p>{children}</p>
    </div>
  );
}

export default TopRatedCard;
