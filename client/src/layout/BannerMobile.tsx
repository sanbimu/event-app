import React from 'react';

const BannerMobile: React.FC = () => {
  return (
    <div className="flex h-[200px] border-b border-black lg:hidden">
      <p className="font-fromage text-6xl font-medium">join events</p>
      <p className="font-fromage text-3xl font-medium">find your tribe</p>
    </div>
  );
};

export default BannerMobile;
