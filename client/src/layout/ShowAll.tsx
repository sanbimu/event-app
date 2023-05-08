import React from 'react';
import Button from '../components/Button';
import EventCard from '../components/EventCard';
import { events } from '../shared/constants';
import ShowOne from '../components/windows/ShowOne';
import { useWindowContext } from '../hooks';
import { Query, useQuery } from '../graphql';

const ShowAll: React.FC = () => {
  const { openWindow } = useWindowContext();

  const handleShowOne = () => {
    openWindow({ content: <ShowOne /> });
  };

  const [data] = useQuery({
    query: Query.Events,
  });

  return (
    <>
      <div className="flex flex-col">
        <div className="border-overlap-tl masonry-grid">
          {events.map((event, index) => {
            const position = index % 2 === 0 ? 1 : 2;
            const height = Math.floor(Math.random() * (200 - 150) + 150);
            return (
              <div
                className="border-overlap-br flex cursor-pointer break-inside-avoid items-center justify-center border border-black p-4"
                onClick={handleShowOne}
              >
                <EventCard
                  height={height}
                  position={position}
                  picture={event.picture}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                />
              </div>
            );
          })}
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
