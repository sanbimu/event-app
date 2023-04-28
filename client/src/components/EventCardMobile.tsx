import React from 'react';

interface EventCardMobileProps {
  position: 'left' | 'right';
}

const EventCardMobile: React.FC<EventCardMobileProps> = ({ position }) => {
  const left = 'left-0';
  const right = 'right-0';

  return (
    <div className="relative flex min-h-[172px] min-w-[300px] flex-row ">
      <div
        className={`absolute ${
          position === 'left' ? left : right
        } top-0 h-[140px] w-[140px] border border-black`}
      >
        1
      </div>
      <div
        className={`absolute ${
          position === 'left' ? right : left
        } bottom-0 h-[140px] w-[140px] border border-black`}
      >
        2
      </div>
    </div>
  );
};

export default EventCardMobile;
