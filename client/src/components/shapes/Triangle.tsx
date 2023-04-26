import React from 'react';

interface TriangleProps {
  className: string;
}

const Triangle: React.FC<TriangleProps> = ({ className }) => {
  return (
    <div
      className={`${className} absolute h-0 w-0 
   border-l-transparent
  border-t-beige-muted border-r-transparent`}
    ></div>
  );
};

export default Triangle;
