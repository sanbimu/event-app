import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { FacebookSVG, InstagramSVG } from '../icons';
import { useAuthContext, useNavContext, useWindowContext } from '../hooks';
import ContinueWith from '../components/windows/ContinueWith';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { openWindow } = useWindowContext();
  const { isAuthorized, user, signOut } = useAuthContext();
  const { setShowNav } = useNavContext();

  const handleNav = () => {
    setShowNav(true);
  };

  return (
    <>
      {/*    MOBILE     */}

      <div className="relative flex h-[80px] flex-row items-center justify-center border-b border-black lg:hidden">
        <Logo />
        <Button
          className="absolute right-4 h-[50px] w-[50px] self-center"
          onClick={handleNav}
        >
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
        <div className="scrollbar-hide flex h-[60vh] flex-col overflow-y-scroll border-b border-black pb-8 pl-8 pt-8">
          {isAuthorized ? (
            <>
              <Button className="mb-6 w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom">
                <div className="flex flex-row items-center">
                  <img src={user.avatar} alt="ID" className="h-[25px] rounded-full"></img>
                  <p className="toolong pl-2">{user.firstName}</p>
                </div>
              </Button>

              <div className="flex flex-col items-start gap-3 pl-6 font-franklin text-sm text-dark-grey">
                <button
                  className=" hover:text-dark-pink"
                  onClick={() => navigate('/myevents')}
                >
                  - MY EVENTS
                </button>
                <button
                  className=" hover:text-dark-pink"
                  onClick={() => navigate('/settings')}
                >
                  - SETTINGS
                </button>
                <button className=" hover:text-dark-pink" onClick={signOut}>
                  - LOG OUT
                </button>
              </div>
            </>
          ) : (
            <Button
              className="w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom"
              text="sign in / sign up"
              onClick={() => openWindow({ content: <ContinueWith /> })}
            />
          )}
          <Button
            className="mt-6 w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom"
            text="search"
            onClick={() => navigate('/search')}
          />
          <Button
            className="mt-6 w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom"
            text="language"
          />
          {/* <div className="mt-5 flex flex-col items-start gap-3 pb-0 pl-6 font-franklin text-sm text-dark-grey">
            <button className=" hover:text-dark-pink">- SAVED EVENTS</button>
            <button className=" hover:text-dark-pink">- SETTINGS</button>
          </div> */}
          <Button
            className="mt-6 w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom"
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
            <img src={FacebookSVG} alt="facebook" className="h-[20px]"></img>
            <img src={InstagramSVG} alt="instagram" className="h-[20px]"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
