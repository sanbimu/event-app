import React from 'react';
import BannerMobile from '../layout/BannerMobile';
import HeaderMobile from '../layout/HeaderMobile';
import NavMobile from '../layout/NavMobile';

export function Index() {
  return (
    <div className="flex h-screen flex-col bg-background">
      <HeaderMobile />
      <BannerMobile />
      <NavMobile />
    </div>
  );
}
