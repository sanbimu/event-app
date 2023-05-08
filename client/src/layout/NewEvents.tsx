import React from 'react';
import Button from '../components/Button';
import Square from '../components/shapes/Square';
import { NextSVG } from '../icons';
import ShowOne from '../components/windows/ShowOne';
import { useWindowContext } from '../hooks';
import { Query, useQuery } from '../graphql';

const NewEvents: React.FC = () => {
  const { openWindow } = useWindowContext();

  const handleShowOne = () => {
    openWindow({ content: <ShowOne /> });
  };

  const [data, execute] = useQuery({
    query: Query.Events,
    variables: {
      status: 'NEW',
      first: 2,
    },
  });

  return (
    <div className="relative flex min-h-[280px] gap-4 overflow-x-auto border-b border-black p-3 lg:min-h-[353px]">
      {data.data?.events.edges.map((e) => {
        const event = e!.node;
        return (
          <div className="flex flex-row border border-black shadow-custom lg:min-w-[calc(100vw_-_260px)]">
            <div className="flex w-[35%] border-r border-black md:w-[50%]">
              <img src={event.picture} className="w-full object-cover p-1"></img>
            </div>

            <div className="relative inline-block w-[65%] pt-6 pl-3 md:w-[50%] md:pt-8 md:pl-8">
              <div className="relative inline-block h-[20px]">
                <p className="toolong relative z-40 font-franklin md:text-xl md:font-light lg:text-2xl">
                  {event.title}
                </p>
                <div className="absolute top-0 bottom-0 left-0 right-0 z-30 translate-x-[0.45rem] translate-y-[0.40rem] bg-dark-pink-transparent"></div>
              </div>
              <p className="pt-4 font-franklin text-sm font-extralight uppercase lg:pt-6 lg:text-[15px]">
                {event.fromDate}
              </p>
              <p className="pt-4 pb-14 font-franklin text-sm font-extralight uppercase md:pb-12 lg:pb-20 lg:pt-6 lg:text-[15px]">
                {event.location.label}
              </p>

              <Button
                className="w-[155px] py-3 font-franklin font-medium shadow-custom lg:w-[190px] lg:py-4"
                text="buy tickets"
                onClick={handleShowOne}
              />

              <img
                src={NextSVG}
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
          </div>
        );
      })}
    </div>
  );
};

export default NewEvents;
