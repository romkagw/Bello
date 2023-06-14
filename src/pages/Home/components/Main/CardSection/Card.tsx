import React, { DragEvent } from 'react';
import './card.scss';

interface CardProps {
  className: string;
  children: React.ReactNode;
  onDragStart: (event: DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: DragEvent<HTMLDivElement>) => void;
  onDragEnd: (event: DragEvent<HTMLDivElement>) => void;
}

function Card({
  className,
  children,
  onDragStart,
  onDragOver,
  onDragEnd,
}: CardProps): JSX.Element {
  return (
    <div
      className={`boards ${className}`}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      {children}
    </div>
  );
}

export default Card;
