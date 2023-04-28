import React from 'react';
import Circle from '../components/shapes/Circle';
import Square from '../components/shapes/Square';
import Triangle from '../components/shapes/Triangle';

const Banner: React.FC = () => {
  return (
    <>
      {/*    MOBILE     */}

      <div className="relative flex min-h-[200px] flex-col overflow-hidden border-b border-black lg:hidden">
        <p className="z-40 pl-6 pt-6 font-fromage text-6xl font-medium">join events</p>
        <p className="z-40 pl-14 pt-2 font-fromage text-5xl font-medium">
          find your tribe
        </p>

        <Circle className="top-2 -right-8 bg-aubergine" size={65}></Circle>

        <div className="absolute bottom-0 h-[70px] pl-2">
          <Triangle className="border-l-[40px] border-b-[70px] border-r-[40px] border-b-beige-muted"></Triangle>
        </div>

        <Circle className="-bottom-6 right-10 bg-orange-muted" size={135}></Circle>

        <Square
          className="bottom-2 left-32 rotate-45 bg-dark-pink-muted"
          size={37}
        ></Square>
      </div>

      {/*    DESKTOP     */}

      <div className="relative hidden min-h-[200px] w-auto flex-col overflow-hidden border-b border-black pl-24 leading-none lg:flex">
        <p className="z-40 pt-5 font-fromage text-[86px] font-medium">join events</p>
        <p className="z-40 pt-1 pl-24 font-fromage text-[64px] font-medium">
          find your tribe
        </p>

        <Circle className="bottom-8 -right-12 bg-aubergine" size={100}></Circle>

        <div className="absolute bottom-0 h-[85px]">
          <Triangle className="border-l-[50px] border-b-[85px] border-r-[50px] border-b-beige-muted"></Triangle>
        </div>

        <Circle className="-bottom-6 right-[420px] bg-orange-muted" size={200}></Circle>

        <Square
          className="top-8 right-[360px] rotate-[35deg] bg-dark-pink-muted"
          size={55}
        ></Square>

        <Triangle className="right-[140px] top-8 rotate-[24deg] border-l-[40px] border-t-[70px] border-r-[40px] border-t-beige-muted" />
        <Square
          className="right-[200px] bottom-6 rotate-[75deg] bg-brown-muted"
          size={65}
        ></Square>
      </div>
    </>
  );
};

export default Banner;
