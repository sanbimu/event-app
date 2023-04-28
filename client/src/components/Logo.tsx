import React from 'react';
import Triangle from './shapes/Triangle';

const Logo: React.FC = () => {
  return (
    <div className="relative flex h-[65px] w-[175px] items-center">
      <p className="absolute z-50 bg-gradient-to-r from-brown to-orange bg-clip-text font-fields text-3xl font-extrabold tracking-wider text-transparent">
        tickettribe
      </p>
      <Triangle
        className="left-[3.25rem]
    z-40 border-l-[35px] border-t-[55px] border-r-[35px] border-t-beige-muted"
      />
    </div>
  );
};

export default Logo;
