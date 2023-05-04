import React from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import { useNavContext, useWindowContext } from '../hooks';
import { CloseSVG, FacebookSVG, InstagramSVG } from '../icons';
import ContinueWith from '../components/windows/ContinueWith';
import { useNavigate } from 'react-router-dom';

const NavMobile: React.FC = () => {
  const navigate = useNavigate();

  const { openWindow } = useWindowContext();

  const { setShowNav } = useNavContext();

  const handleNav = () => {
    setShowNav(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[90] flex h-screen w-screen justify-end overflow-hidden bg-black bg-opacity-30 lg:hidden">
      <div className="relative flex h-[90%] w-[80%] flex-col bg-background md:w-[45%]">
        <div className="flex h-[12%] flex-row items-center justify-center border-b border-l border-black">
          <Button
            className="absolute left-3 top-3 flex h-[30px] w-[30px] items-center justify-center"
            onClick={handleNav}
          >
            <img src={CloseSVG} alt="X" className="h-[25px]"></img>
          </Button>
          <Logo />
        </div>

        <div className="flex h-[63%] flex-col items-end gap-8 border-b border-l border-black pt-16 pr-12">
          <Button
            className="w-[170px] p-[0.60rem] shadow-custom"
            onClick={() => openWindow({ content: <ContinueWith /> })}
          >
            <p className="font-franklin text-sm">SIGN IN / SIGN UP</p>
          </Button>
          <Button
            className="w-[170px] p-[0.60rem] shadow-custom"
            onClick={() => navigate('/search')}
          >
            <p className="font-franklin text-sm">SEARCH</p>
          </Button>
          <Button className="w-[170px] p-[0.60rem] shadow-custom">
            <p className="font-franklin text-sm">LANGUAGE</p>
          </Button>
          <Button className="w-[170px] p-[0.60rem] shadow-custom">
            <p className="font-franklin text-sm">CART</p>
          </Button>
        </div>

        <div className="flex h-[25%] flex-col items-end justify-center border-b border-l border-black pr-6 leading-[1.30rem]">
          <p className="font-franklin text-xxs text-dark-grey">© 2023 VIBE INC.</p>
          <p className="pt-[0.10rem] font-franklin text-xxs text-dark-grey">
            Cookie Policy
          </p>
          <p className="font-franklin text-xxs text-dark-grey">Terms & Conditions</p>
          <p className="font-franklin text-xxs text-dark-grey">FAQ</p>
          <p className="font-franklin text-xxs text-dark-grey">Contact Support</p>
          <div className="flex flex-row gap-2 pt-1">
            <img src={FacebookSVG} alt="facebook" className="h-[20px]"></img>
            <img src={InstagramSVG} alt="instagram" className="h-[20px]"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
