import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { FB_pink_SVG, InstagramSVG } from '../icons';
import { useWindowContext } from '../hooks';
import ContinueWith from '../components/windows/ContinueWith';

const Header: React.FC = () => {
  const { openWindow } = useWindowContext();
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

      <div className=" fixed hidden h-screen min-w-[240px] flex-col border-r border-black lg:flex">
        <div className="flex h-[12vh] items-center justify-center border-b border-black">
          <Logo />
        </div>
        <div className="flex h-[60vh] flex-col gap-6 border-b border-black pl-8 pt-10">
          <Button
            className="w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom"
            text="sign in / sign up"
            onClick={() => openWindow({ content: <ContinueWith /> })}
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
        <div className="flex h-[28vh] flex-col justify-center pl-6 font-franklin text-xxs leading-relaxed text-dark-grey">
          <p className="pb-1">© 2023 VIBE INC.</p>
          <p className="pb-1 pt-[0.10rem]">Cookie Policy</p>
          <p className="pb-1">Terms & Conditions</p>
          <p className="pb-1">FAQ</p>
          <p className="pb-1">Contact Support</p>
          <div className="flex flex-row gap-2 pt-1">
            <img src={FB_pink_SVG} alt="facebook" className="h-[20px]"></img>
            <img src={InstagramSVG} alt="instagram" className="h-[20px]"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
