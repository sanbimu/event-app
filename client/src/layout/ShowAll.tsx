import React from 'react';
import Button from '../components/Button';
import EventCardMobile from '../components/EventCardMobile';

const ShowAll: React.FC = () => {
  return (
    <>
      <div className="flex flex-col lg:hidden">
        <div className="flex min-h-[205px] w-full items-center justify-center border-b border-black">
          <EventCardMobile position="left" />
        </div>
        <div className="flex min-h-[205px] w-full items-center justify-center border-b border-black">
          <EventCardMobile position="right" />
        </div>
        <div className="flex min-h-[70px] items-center justify-center">
          <Button className="w-[200px] py-2" text="show more" />
        </div>
      </div>

      <div className="hidden lg:flex">
        <div></div>
      </div>
    </>
  );
};

export default ShowAll;
