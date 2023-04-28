import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';

const Header: React.FC = () => {
  return (
    <>
      {/*    MOBILE     */}

      <div className="relative flex h-[80px] flex-row items-center justify-center border-b border-black lg:hidden">
        <Logo />
        <Button className="absolute right-4 h-[50px] w-[50px] self-center">
          <div className="flex flex-col items-center gap-2">
            <div className="h-[2px] w-[30px] bg-brown"></div>
            <div className="h-[2px] w-[30px] bg-brown"></div>
            <div className="h-[2px] w-[30px] bg-brown"></div>
          </div>
        </Button>
      </div>

      {/*    DESKTOP     */}

      <div className=" hidden h-screen min-w-[240px] flex-col border-r border-black lg:flex">
        <div className="flex h-[12vh] items-center justify-center border-b border-black">
          <Logo />
        </div>
        <div className="flex h-[60vh] flex-col gap-6 border-b border-black pl-8 pt-10">
          <Button
            className="w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom"
            text="sign in / sign up"
          />
          <Button
            className="w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom"
            text="search"
          />
          <Button
            className="w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom"
            text="language"
          />
          <Button
            className="w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom"
            text="cart"
          />
        </div>
        <div className="flex h-[28vh] flex-col justify-center pl-6 leading-relaxed">
          <p className="pb-1 font-franklin text-xxs text-dark-grey">© 2023 VIBE INC.</p>
          <p className="pb-1 pt-[0.10rem] font-franklin text-xxs text-dark-grey">
            Cookie Policy
          </p>
          <p className="pb-1 font-franklin text-xxs text-dark-grey">Terms & Conditions</p>
          <p className="pb-1 font-franklin text-xxs text-dark-grey">FAQ</p>
          <p className="pb-1 font-franklin text-xxs text-dark-grey">Contact Support</p>
          <div className="flex flex-row gap-2 pt-1">
            <img src="/facebook.svg" alt="facebook" className="h-[20px]"></img>
            <img src="/instagram.svg" alt="instagram" className="h-[20px]"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
