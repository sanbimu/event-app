import React from 'react';
import Button from '../components/Button';
import NewEvent from '../components/NewEvent';
import Square from '../components/shapes/Square';

const NewEvents: React.FC = () => {
  return (
    <div className="relative flex min-h-[280px] border-b border-black p-3 lg:min-h-[353px]">
      <NewEvent>
        <div className="flex w-[35%] border-r border-black md:w-[50%]">
          <img src="test.jpeg" className="object-cover p-1"></img>
        </div>

        <div className="relative inline-block w-[65%] pt-6 pl-3 md:w-[50%] md:pt-8 md:pl-8">
          <div className="relative inline-block h-[20px]">
            <p className="relative z-40 font-franklin md:text-xl md:font-light lg:text-2xl">
              Name
            </p>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-30 translate-x-[0.45rem] translate-y-[0.40rem] bg-dark-pink-transparent"></div>
          </div>
          <p className="pt-4 font-franklin text-sm font-extralight uppercase lg:pt-6 lg:text-[15px]">
            Date
          </p>
          <p className="pt-4 pb-14 font-franklin text-sm font-extralight uppercase md:pb-12 lg:pb-20 lg:pt-6 lg:text-[15px]">
            Location
          </p>

          <Button
            className="w-[155px] py-3 font-franklin font-medium shadow-custom lg:w-[190px] lg:py-4"
            text="buy tickets"
          />

          <img
            src="/next.svg"
            alt="next"
            className="absolute top-[90px] right-0 h-[22px] md:right-4 lg:top-[140px] lg:h-[28px]"
          ></img>

          <div>
            <Square className="bottom-[40px] right-[22px] z-30 h-[24px] w-[24px] rotate-[20deg] bg-dark-pink-transparent md:right-[64px] lg:h-[40px] lg:w-[40px]"></Square>
            <p className="absolute right-4 bottom-10 z-40 -rotate-[25deg] font-franklin text-lg font-semibold md:right-[60px] lg:right-[65px] lg:bottom-12 lg:text-xl ">
              new
            </p>
          </div>
        </div>
      </NewEvent>
    </div>
  );
};

export default NewEvents;
