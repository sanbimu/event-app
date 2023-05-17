import React, { useEffect, useMemo, useState } from 'react';
import Button from '../components/Button';
import Square from '../components/shapes/Square';
import { NextSVG } from '../icons';
import ShowOne from '../components/windows/ShowOne';
import { useWindowContext } from '../hooks';
import { Query, useQuery } from '../graphql';
import { truthyObject } from '../utils/object';
import { formatDates } from '../utils/format';
import { useTranslation } from 'react-i18next';

const NewEvents: React.FC = () => {
  const { openWindow } = useWindowContext();
  const { t, i18n } = useTranslation();

  const [cursor, setCursor] = useState('');

  const [data, execute] = useQuery({
    query: Query.Events,
    variables: truthyObject({
      status: 'NEW',
      first: 1,
      after: cursor,
    }),
    pause: true,
  });

  const event = useMemo(() => data.data?.events.edges[0]?.node, [data.data]);

  useEffect(() => {
    execute();
  }, []);

  useEffect(() => {
    setCursor(data.data?.events.edges[0]?.node._id.toString() || '');
  }, [data]);

  if (!event) {
    return null;
  }

  return (
    <div className="scrollbar-hide relative flex min-h-[280px] gap-4 overflow-x-auto border-b border-black p-3 lg:min-h-[353px]">
      <div className="flex w-full flex-row border border-black shadow-custom">
        <div className="flex w-[35%] border-r border-black md:w-[50%]">
          <img src={event.picture} className="w-full object-cover p-1"></img>
        </div>

        <div className="relative inline-block w-[65%] pl-3 pt-6 md:w-[50%] md:pl-8 md:pt-8">
          <p className="toolong shadow-text mr-6 font-franklin md:text-xl md:font-light lg:text-2xl">
            {event.title}
          </p>

          <p className="pt-4 font-franklin text-sm font-extralight uppercase lg:pt-6 lg:text-[15px]">
            {formatDates(event.fromDate, event.toDate)}
          </p>
          <p className="pb-14 pt-4 font-franklin text-sm font-extralight uppercase md:pb-12 lg:pb-20 lg:pt-6 lg:text-[15px]">
            {event.location.label}
          </p>

          <Button
            className="min-w-[155px] py-3 px-2 font-franklin font-medium shadow-custom lg:min-w-[190px] lg:py-4"
            text={t('new-event.buy-tickets')!}
            onClick={() => openWindow(<ShowOne id={event._id} />)}
          />

          <img
            src={NextSVG}
            alt="next"
            className="absolute right-0 top-[90px] h-[22px] cursor-pointer md:right-4 lg:top-[140px] lg:h-[28px]"
            onClick={execute}
          ></img>

          <div className="absolute bottom-24 right-4 flex items-center justify-center md:right-[60px] lg:bottom-12 lg:right-[65px]">
            <Square className="z-30 h-[24px] w-[24px] rotate-[20deg] bg-dark-pink-transparent lg:h-[40px] lg:w-[40px]"></Square>
            <p className="z-40 -rotate-[25deg] font-franklin text-lg font-semibold  lg:text-xl ">
              {t('new-event.new')!}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEvents;
