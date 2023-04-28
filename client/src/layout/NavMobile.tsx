import React from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';

const NavMobile: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[100] flex h-screen w-screen justify-end overflow-hidden bg-black bg-opacity-30">
      <div className="relative flex h-[600px] w-[80%] flex-col bg-background">
        <div className="flex h-[80px] flex-row items-center justify-center border-b border-l border-black">
          <Button className="absolute left-3 top-3 flex h-[30px] w-[30px] items-center justify-center">
            {/* <p className="font-franklin text-xl font-extralight">X</p> */}
            <img src="/close.svg" alt="X" className="h-[15px]"></img>
          </Button>
          <Logo />
        </div>

        <div className="flex h-[360px] flex-col items-center gap-6 border-b border-l border-black pt-12">
          <Button className="w-[150px] p-[0.60rem] shadow-custom">
            <p className="font-franklin text-sm">SIGN IN / SIGN UP</p>
          </Button>
          <Button className="w-[150px] p-[0.60rem] shadow-custom">
            <p className="font-franklin text-sm">SEARCH</p>
          </Button>
          <Button className="w-[150px] p-[0.60rem] shadow-custom">
            <p className="font-franklin text-sm">LANGUAGE</p>
          </Button>
          <Button className="w-[150px] p-[0.60rem] shadow-custom">
            <p className="font-franklin text-sm">CART</p>
          </Button>
        </div>

        <div className="flex h-[160px] flex-col items-end justify-center border-b border-l border-black pr-6 leading-relaxed">
          <p className="font-franklin text-xxs text-dark-grey">© 2023 VIBE INC.</p>
          <p className="pt-[0.10rem] font-franklin text-xxs text-dark-grey">
            Cookie Policy
          </p>
          <p className="font-franklin text-xxs text-dark-grey">Terms & Conditions</p>
          <p className="font-franklin text-xxs text-dark-grey">FAQ</p>
          <p className="font-franklin text-xxs text-dark-grey">Contact Support</p>
          <div className="flex flex-row gap-2 pt-1">
            <img src="/facebook.svg" alt="facebook" className="h-[20px]"></img>
            <img src="/instagram.svg" alt="instagram" className="h-[20px]"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
