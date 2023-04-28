import React from 'react';

interface SquareProps {
  className: string;
  size: number;
}

const Square: React.FC<SquareProps> = ({ className, size }) => {
  return (
    <div
      className={`${className} absolute`}
      style={{ height: `${size}px`, width: `${size}px` }}
    ></div>
  );
};

export default Square;
