import React, { useEffect, useState, useMemo } from 'react';
import Button from '../components/Button';
import EventCard from '../components/EventCard';
import ShowOne from '../components/windows/ShowOne';
import { useSearchFiltersContext, useWindowContext } from '../hooks';
import { Query, useQuery } from '../graphql';
import { truthyObject } from '../utils/object';

const ShowAll: React.FC = () => {
  const { openWindow } = useWindowContext();

  const handleShowOne = () => {
    openWindow({ content: <ShowOne /> });
  };

  const { searchFilters, searchQuery } = useSearchFiltersContext();

  const [cursor, setCursor] = useState('');

  const [data, execute] = useQuery({
    query: Query.Events,
    variables: truthyObject({
      query: searchQuery,
      ...searchFilters,
      after: cursor,
      first: 3,
    }),
    requestPolicy: 'network-only',
  });

  useEffect(execute, [searchQuery, cursor]);

  const events = useMemo(() => {
    return data.data?.events.edges;
  }, [data.fetching]);

  const handleShowMore = () => {
    setCursor(data.data?.events.pageInfo.endCursor || '');
  };

  return (
    <div className="flex flex-col">
      <div className="border-overlap-tl masonry-grid">
        {events?.map((e, index) => {
          const event = e!.node;
          const position = index % 2 === 0 ? 1 : 2;
          const height = Math.floor(Math.random() * (200 - 150) + 150);
          return (
            <div
              className="border-overlap-br flex cursor-pointer break-inside-avoid items-center justify-center border border-black p-4"
              onClick={handleShowOne}
              key={event._id.toString()}
            >
              <EventCard
                height={height}
                position={position}
                picture={event.picture}
                title={event.title}
                date={event.fromDate}
                location={event.location.label}
              />
            </div>
          );
        })}
      </div>

      <div className="flex min-h-[70px] items-center justify-center">
        <Button className="w-[200px] py-2" text="show more" onClick={handleShowMore} />
      </div>
    </div>
  );
};

export default ShowAll;
