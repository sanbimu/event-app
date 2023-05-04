import { useEffect, useState } from 'react';
import Logo from '../Logo';
import { WindowButton } from '../WindowButton';
import { useAuthContext, useWindowContext } from '../../hooks';
import { FacebookSVG, GoogleSVG } from '../../icons';

const ContinueWith = () => {
  const { closeWindow } = useWindowContext();
  const { isAuthorized, user } = useAuthContext();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (isAuthorized && clicked) {
      closeWindow();
      setClicked(false);
    }
  }, [user]);

  return (
    <div className="flex h-[50vh] w-[80vw] flex-col gap-8 p-9 md:h-[420px] md:w-[480px]">
      <div className="flex flex-col items-center gap-3">
        <p className="font-franklin text-2xl font-extralight">WELCOME TO</p>
        <Logo />
      </div>
      <div className="mt-6 flex flex-col items-center justify-center gap-6">
        <WindowButton provider="google" onMouseUp={() => setClicked(true)}>
          <div className="flex w-[70vw] flex-row items-center gap-4 border border-black py-3 pl-4 font-franklin text-sm font-extralight uppercase text-dark-grey hover:text-dark-pink md:w-[320px] md:pl-6 md:text-base">
            <img src={GoogleSVG} alt="google" className="h-[30px]"></img>
            Continue with Google
          </div>
        </WindowButton>
        <WindowButton provider="facebook" onMouseUp={() => setClicked(true)}>
          <div className="flex w-[70vw] flex-row items-center justify-center gap-4 border border-black py-3 px-3 font-franklin text-sm font-extralight uppercase text-dark-grey hover:text-dark-pink md:w-[320px] md:text-base">
            <img src={FacebookSVG} alt="facebook" className="h-[30px]"></img>
            Continue with Facebook
          </div>
        </WindowButton>
      </div>
    </div>
  );
};

export default ContinueWith;
