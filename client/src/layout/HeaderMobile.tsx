import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import NavMobile from './NavMobile';

const HeaderMobile: React.FC = () => {
  return (
    <div className="relative flex h-[80px] flex-row items-center justify-center border-b border-black lg:hidden">
      <Logo />
      <Button className="absolute right-4 h-[50px] w-[50px] self-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-[2px] w-[30px] bg-brown"></div>
          <div className="h-[2px] w-[30px] bg-brown"></div>
          <div className="h-[2px] w-[30px] bg-brown"></div>
        </div>
      </Button>
      <NavMobile />
    </div>
  );
};

export default HeaderMobile;
