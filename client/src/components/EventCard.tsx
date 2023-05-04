import React from 'react';

interface Props {
  height: number;
  picture: string;
  title: string;
  date: string;
  location: string;
  position: 1 | 2;
}

const EventCard: React.FC<Props> = ({
  height,
  picture,
  title,
  date,
  location,
  position,
}) => {
  const image = position === 1 ? 'top-0 left-0' : 'bottom-0 right-0';
  const content = position === 1 ? 'bottom-0 right-0' : 'top-0 left-0';

  return (
    <div
      className="relative flex w-[300px] flex-row sm:max-md:h-[172px] md:w-[230px]"
      style={{ height: height + 'px' }}
    >
      <img
        className={`${image} absolute h-[140px] w-[140px] border border-black object-cover`}
        src={picture}
      />
      <div
        className={`${content} absolute flex h-[140px] w-[140px] flex-col justify-between border border-black bg-background px-2 py-4 font-franklin text-sm`}
      >
        <div className="relative">
          <p className="relative z-40 font-medium">{title}</p>
          <div className="absolute bottom-0 left-0 right-0 top-0 z-30 h-[18px] translate-x-[0.45rem] translate-y-[0.40rem] bg-dark-pink-transparent"></div>
        </div>
        <div>{date}</div>
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">{location}</div>
      </div>
    </div>
  );
};

export default EventCard;
