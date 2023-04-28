import React from 'react';

interface CircleProps {
  className: string;
  size: number;
}

const Circle: React.FC<CircleProps> = ({ className, size }) => {
  return (
    <div
      className={`${className} absolute rounded-full`}
      style={{ height: `${size}px`, width: `${size}px` }}
    ></div>
  );
};

export default Circle;
