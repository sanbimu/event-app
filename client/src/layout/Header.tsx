import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { FacebookSVG, InstagramSVG } from '../icons';
import { useAuthContext, useNavContext, useWindowContext } from '../hooks';
import ContinueWith from '../components/windows/ContinueWith';
import { useNavigate } from 'react-router-dom';
import PrivacyPolicy from '../components/windows/PrivacyPolicy';
import TermsConditions from '../components/windows/TermsConditions';
import FAQ from '../components/windows/FAQ';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { isAuthorized, user, signOut } = useAuthContext();

  const { openWindow } = useWindowContext();
  const { setShowNav } = useNavContext();

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
    <>
      {/*    MOBILE     */}

      <div className="relative flex min-h-[80px] flex-row items-center justify-center border-b border-black lg:hidden">
        <Logo />
        <Button
          className="absolute right-4 h-[50px] w-[50px] self-center"
          onClick={() => setShowNav(true)}
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
                  className="uppercase hover:text-dark-pink"
                  onClick={() => navigate('/my-events')}
                >
                  - {t('my-events.button')}
                </button>
                <button
                  className=" hover:text-dark-pink"
                  onClick={() => navigate('/settings')}
                >
                  - {t('header.settings')}
                </button>
                <button className=" hover:text-dark-pink" onClick={signOut}>
                  - {t('header.logout')}
                </button>
              </div>
            </>
          ) : (
            <Button
              className="w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom"
              text={t('sign-in.button')!}
              onClick={() => openWindow(<ContinueWith />)}
            />
          )}
          <Button
            className="mt-6 w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom"
            text={t('search.text')!}
            onClick={() => navigate('/search')}
          />
          <Button
            className="mt-6 w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom"
            text={t('header.language')!}
            onClick={toggleLanguagesMenu}
          />

          {languagesMenu && (
            <div className="mt-5 flex flex-col items-start gap-3 pb-0 pl-6 font-franklin text-sm text-dark-grey">
              <button
                className="uppercase hover:text-dark-pink"
                onClick={() => changeLanguage('en')}
              >
                - english
              </button>
              <button
                className="uppercase hover:text-dark-pink"
                onClick={() => changeLanguage('fr')}
              >
                - français
              </button>
            </div>
          )}

          <Button
            className="mt-6 w-[150px] p-[0.60rem] font-franklin text-sm shadow-custom"
            text={t('header.cart')!}
            onClick={() => navigate('/cart')}
          />
        </div>
        <div className="flex h-[28vh] flex-col justify-center pl-6 font-franklin text-xxs leading-relaxed text-dark-grey">
          <p className="pb-1">© 2023 VIBE INC.</p>
          <button
            className="pb-1 pt-[0.10rem] text-left hover:text-dark-pink"
            onClick={handlePrivacy}
          >
            {t('header.cookie-policy')}
          </button>
          <button
            className="pb-1 pt-[0.10rem] text-left hover:text-dark-pink"
            onClick={handleTerms}
          >
            {t('header.terms')}
          </button>
          <button
            className="pb-1 pt-[0.10rem] text-left hover:text-dark-pink"
            onClick={handleFAQ}
          >
            {t('header.faq')}
          </button>
          <p className="pb-1">{t('header.contact')}</p>
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
