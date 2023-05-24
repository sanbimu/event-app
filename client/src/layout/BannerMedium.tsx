import React from 'react';
import Circle from '../components/shapes/Circle';
import Square from '../components/shapes/Square';
import Triangle from '../components/shapes/Triangle';

interface BannerMediumProps {
  title: string;
  fontMobile: string;
}

const BannerMedium: React.FC<BannerMediumProps> = ({ title, fontMobile }) => {
  return (
    <>
      {/*    MOBILE     */}

      <div className="relative flex min-h-[160px] flex-col overflow-hidden border-b border-black md:hidden">
        <p className={`z-40 pl-14 pt-10 font-fromage ${fontMobile} font-medium`}>
          {title}
        </p>

        <Circle className="top-2 -right-8 bg-aubergine" size={65}></Circle>

        <div className="absolute top-0 h-[50px] pl-14">
          <Triangle className="border-l-[30px] border-t-[50px] border-r-[30px] border-t-beige-muted"></Triangle>
        </div>

        <div className="absolute bottom-0 h-[70px] pl-2">
          <Triangle className="border-l-[40px] border-b-[70px] border-r-[40px] border-b-beige-muted"></Triangle>
        </div>

        <Circle className="-bottom-6 right-10 bg-orange-muted" size={135}></Circle>

        <Square className="top-8 left-4 rotate-12 bg-dark-pink-muted" size={25}></Square>
      </div>

      {/*    DESKTOP     */}

      <div className="relative hidden min-h-[160px] w-auto flex-col overflow-hidden border-b border-black pl-8 leading-none md:flex">
        <p className="z-40 font-fromage font-medium md:pt-8 md:pl-40 md:text-[86px] lg:pt-8 lg:text-[96px]">
          {title}
        </p>

        <Circle className="bottom-8 -right-12 bg-aubergine" size={100}></Circle>

        <div className="absolute top-0 h-[70px] pl-14">
          <Triangle className="border-l-[50px] border-t-[70px] border-r-[50px] border-t-beige-muted"></Triangle>
        </div>

        <div className="absolute bottom-0 h-[85px]">
          <Triangle className="border-l-[50px] border-b-[85px] border-r-[50px] border-b-beige-muted"></Triangle>
        </div>

        <Circle className="-bottom-6 bg-orange-muted md:left-[440px] md:h-[160px] md:w-[160px] lg:left-[480px] lg:h-[180px] lg:w-[180px]"></Circle>

        <Square
          className="top-8 rotate-[35deg] bg-dark-pink-muted md:right-[90px] lg:right-[360px]"
          size={55}
        ></Square>

        <Triangle className="right-[140px] top-8 rotate-[24deg] border-l-[40px] border-t-[70px] border-r-[40px] border-t-beige-muted md:hidden lg:block" />
        <Square
          className="right-[200px] bottom-6 rotate-[75deg] bg-brown-muted md:hidden lg:block"
          size={65}
        ></Square>
      </div>
    </>
  );
};

export default BannerMedium;
