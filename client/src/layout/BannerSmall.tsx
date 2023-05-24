import React from 'react';
import { useTranslation } from 'react-i18next';
import Triangle from '../components/shapes/Triangle';

const BannerSmall: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* MOBILE*/}

      <div className="relative flex min-h-[120px] flex-col overflow-hidden border-b border-black md:hidden">
        <p className="z-40 pl-20 pt-6 font-fromage text-[50px] font-medium">
          {t('my-events.bought')}
        </p>

        <div className="absolute top-0 h-[50px] pl-14">
          <Triangle className="border-l-[30px] border-t-[50px] border-r-[30px] border-t-beige-muted"></Triangle>
        </div>

        <div className="absolute bottom-0 h-[70px] pl-2">
          <Triangle className="border-l-[40px] border-b-[70px] border-r-[40px] border-b-beige-muted"></Triangle>
        </div>
      </div>

      {/*    DESKTOP     */}

      <div className="relative hidden min-h-[120px] w-auto flex-col overflow-hidden border-b border-black pl-8 leading-none md:flex">
        <p className="z-40 pt-6 font-fromage text-7xl font-medium md:pl-40">
        {t('my-events.saved')}
        </p>

        <div className="absolute top-0 h-[70px] pl-14">
          <Triangle className="border-l-[50px] border-t-[70px] border-r-[50px] border-t-beige-muted"></Triangle>
        </div>

        <div className="absolute bottom-0 h-[85px]">
          <Triangle className="border-l-[50px] border-b-[85px] border-r-[50px] border-b-beige-muted"></Triangle>
        </div>
      </div>
    </>
  );
};

export default BannerSmall;
