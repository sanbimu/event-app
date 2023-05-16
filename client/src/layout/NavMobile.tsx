import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import Logo from '../components/Logo';
import {
  useAuthContext,
  useNavContext,
  useWindowContext,
  useClickOutside,
} from '../hooks';
import { CloseSVG, FacebookSVG, InstagramSVG } from '../icons';
import ContinueWith from '../components/windows/ContinueWith';
import { useNavigate } from 'react-router-dom';
import PrivacyPolicy from '../components/windows/PrivacyPolicy';
import TermsConditions from '../components/windows/TermsConditions';
import FAQ from '../components/windows/FAQ';
import { useState } from 'react';

const NavMobile: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { isAuthorized, user, signOut } = useAuthContext();

  const { openWindow } = useWindowContext();
  const { setShowNav } = useNavContext();

  const navRef = useClickOutside(() => setShowNav(false));

  const handleNav = () => {
    setShowNav(false);
  };

  const handleSearch = () => {
    navigate('/search');
    setShowNav(false);
  };

  const handleSettings = () => {
    navigate('/settings');
    setShowNav(false);
  };

  const handleEvents = () => {
    navigate('/my-events');
    setShowNav(false);
  };

  const handleCart = () => {
    navigate('/cart');
    setShowNav(false);
  };

  const handlePrivacy = () => {
    openWindow(<PrivacyPolicy />);
  };

  const handleTerms = () => {
    openWindow(<TermsConditions />);
  };

  const handleFAQ = () => {
    openWindow(<FAQ />);
  };

  const [languagesMenu, setLanguagesMenu] = useState(false);

  const toggleLanguagesMenu = () => {
    setLanguagesMenu((prev) => !prev);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-screen w-screen justify-end overflow-hidden bg-black bg-opacity-30 lg:hidden">
      <div
        className="relative flex h-[100vh] w-[80%] flex-col bg-background md:w-[45%]"
        ref={navRef}
      >
        <div className="flex h-[12%] flex-row items-center justify-center border-b border-l border-black">
          <Button
            className="absolute left-3 top-3 flex h-[30px] w-[30px] items-center justify-center"
            onClick={handleNav}
          >
            <img src={CloseSVG} alt="X" className="h-[25px]"></img>
          </Button>
          <Logo />
        </div>

        <div className="scrollbar-hide flex h-[60%] flex-col items-end overflow-y-scroll border-b border-l border-black py-10 pr-12">
          {isAuthorized ? (
            <div className="flex flex-col gap-1">
              <Button className="text-md mb-4 w-[190px] p-[0.60rem] font-franklin shadow-custom">
                <div className="flex flex-row items-center pl-3">
                  <img src={user.avatar} alt="ID" className="h-[25px] rounded-full"></img>
                  <p className="toolong pl-2">{user.firstName}</p>
                </div>
              </Button>

              <div className="text-md flex flex-col items-start  gap-2 pl-8 font-franklin text-dark-grey">
                <button className="uppercase hover:text-dark-pink" onClick={handleEvents}>
                  - {t('my-events.button')}
                </button>
                <button
                  className="uppercase hover:text-dark-pink"
                  onClick={handleSettings}
                >
                  - {t('header.settings')}
                </button>
                <button className="uppercase hover:text-dark-pink" onClick={signOut}>
                  - {t('header.logout')}
                </button>
              </div>
            </div>
          ) : (
            <Button
              className="text-md w-[190px] p-[0.60rem] font-franklin shadow-custom"
              text={t('sign-in.button')!}
              onClick={() => openWindow(<ContinueWith />)}
            />
          )}
          <Button
            className="text-md mt-6 w-[190px] p-[0.60rem] font-franklin shadow-custom"
            text={t('search.text')!}
            onClick={handleSearch}
          />
          <Button
            className="text-md mt-6 w-[190px] p-[0.60rem] font-franklin shadow-custom"
            text={t('header.language')!}
            onClick={toggleLanguagesMenu}
          />

          {languagesMenu && (
            <div className="mt-5 flex flex-col items-start gap-3 pb-0 pl-6 font-franklin text-sm text-dark-grey">
              <button
                className="uppercase hover:text-dark-pink"
                onClick={() => changeLanguage('en')}
              >
                english
              </button>
              <button
                className="uppercase hover:text-dark-pink"
                onClick={() => changeLanguage('fr')}
              >
                français
              </button>
            </div>
          )}

          <Button
            className="text-md mt-6 w-[190px] p-[0.60rem] font-franklin shadow-custom"
            text={t('header.cart')!}
            onClick={handleCart}
          />
        </div>

        <div className="flex h-[28%] flex-col items-end justify-center border-b border-l border-black pr-6 font-franklin text-[15px] leading-[1.70rem]">
          <p className=" text-dark-grey">© 2023 VIBE INC.</p>
          <button
            className=" pt-[0.15rem] text-left hover:text-dark-pink"
            onClick={handlePrivacy}
          >
            {t('header.cookie-policy')}
          </button>
          <button
            className="pt-[0.15rem] text-left hover:text-dark-pink"
            onClick={handleTerms}
          >
            {t('header.terms')}
          </button>
          <button
            className="pt-[0.15rem] text-left hover:text-dark-pink"
            onClick={handleFAQ}
          >
            {t('header.faq')}
          </button>
          <p className="font-franklin text-[15px] text-dark-grey">
            {t('header.contact')}
          </p>
          <div className="flex flex-row gap-2 pt-2">
            <img src={FacebookSVG} alt="facebook" className="h-[20px]"></img>
            <img src={InstagramSVG} alt="instagram" className="h-[20px]"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
