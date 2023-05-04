import { useEffect, useState } from 'react';
import Logo from '../Logo';
import { WindowButton } from '../WindowButton';
import { useAuthContext, useWindowContext } from '../../hooks';
import { FB_blue_SVG, GoogleSVG } from '../../icons';

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
    <div className="flex h-[420px] w-[480px] flex-col gap-8 p-9">
      <div className="flex flex-col items-center gap-3">
        <p className="font-franklin text-2xl font-extralight">WELCOME TO</p>
        <Logo />
      </div>
      <div className="mt-12 flex flex-col items-center justify-center gap-6">
        <WindowButton provider="google" onMouseUp={() => setClicked(true)}>
          <div className="flex flex-row items-center gap-4 bg-white py-3 px-6 font-franklin font-medium">
            <img src={GoogleSVG} alt="google" className="h-[30px]"></img>
            Continue with Google
          </div>
        </WindowButton>
        <WindowButton provider="facebook" onMouseUp={() => setClicked(true)}>
          <div className="flex flex-row items-center gap-4 bg-white py-3 px-6 font-franklin font-medium text-facebook">
            <img src={FB_blue_SVG} alt="facebook" className="h-[30px]"></img>
            Continue with Facebook
          </div>
        </WindowButton>
      </div>
    </div>
  );
};

export default ContinueWith;
