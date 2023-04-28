import React from 'react';
import Button from '../components/Button';
import NewEvent from '../components/NewEvent';
import Square from '../components/shapes/Square';

const NewEvents: React.FC = () => {
  return (
    <div className="relative flex min-h-[240px] border-b border-black p-3 lg:hidden">
      <NewEvent>
        <div className="flex w-[35%] border-r border-black">
          <img src="test.jpeg" className="object-cover p-1"></img>
        </div>

        <div className="relative inline-block w-[65%] pt-6 pl-3">
          <div className="relative inline-block h-[20px]">
            <p className="relative z-40 font-franklin">Name</p>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-30 translate-x-[0.45rem] translate-y-[0.40rem] bg-dark-pink-transparent"></div>
          </div>
          <p className="pt-4 font-franklin text-sm font-extralight uppercase">Date</p>
          <p className="pt-4 pb-6 font-franklin text-sm font-extralight uppercase">
            Location
          </p>

          <Button
            className="w-[155px] py-3 font-franklin font-medium"
            text="buy tickets"
          />

          <img
            src="/next.svg"
            alt="next"
            className="absolute top-[90px] right-0 h-[22px]"
          ></img>

          <div>
            <Square
              className="bottom-[40px] right-[22px] z-30 rotate-[20deg] bg-dark-pink-transparent"
              size={24}
            ></Square>
            <p className="absolute right-4 bottom-10 z-40 -rotate-[25deg] font-franklin text-lg font-semibold ">
              new
            </p>
          </div>
        </div>
      </NewEvent>
    </div>
  );
};

export default NewEvents;
