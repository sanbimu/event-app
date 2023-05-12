import React, { useEffect, useState, useMemo } from 'react';
import { ObjectId } from 'mongodb';
import seedrandom from 'seedrandom';
import Button from '../components/Button';
import EventCard from '../components/EventCard';
import ShowOne from '../components/windows/ShowOne';
import { useSearchFiltersContext, useWindowContext } from '../hooks';
import { Query, useQuery } from '../graphql';
import { truthyObject } from '../utils/object';
import { formatDates } from '../utils/format';

const ShowAll: React.FC = () => {
  const { openWindow } = useWindowContext();

  const handleShowOne = (id: ObjectId) => {
    openWindow(<ShowOne id={id} />);
  };

  const { searchFilters, searchQuery } = useSearchFiltersContext();

  const [cursor, setCursor] = useState({ after: '', order: 'ASC' });

  const [data, execute] = useQuery({
    query: Query.Events,
    variables: truthyObject({
      query: searchQuery,
      ...searchFilters,
      ...cursor,
      first: 15,
    }),
    requestPolicy: 'network-only',
    pause: true,
  });

  useEffect(() => {
    setCursor({ after: '', order: 'ASC' });
  }, [searchFilters, searchQuery]);

  useEffect(execute, [searchFilters, searchQuery, cursor]);

  const events = useMemo(() => {
    return data.data?.events.edges;
  }, [data.fetching]);

  const handlePrevious = () => {
    setCursor({ after: data.data?.events.pageInfo.startCursor || '', order: 'DESC' });
  };

  const handleNext = () => {
    setCursor({ after: data.data?.events.pageInfo.endCursor || '', order: 'ASC' });
  };

  return (
    <div className="flex flex-col">
      <div className="border-overlap-tl masonry-grid">
        {events?.map((e, index) => {
          const event = e!.node;
          const position = index % 2 === 0 ? 1 : 2;
          const height = Math.floor(seedrandom(index.toString())() * (200 - 150) + 150);

          return (
            <div
              className="border-overlap-br flex cursor-pointer break-inside-avoid items-center justify-center border border-black p-4"
              onClick={() => handleShowOne(event._id)}
              key={event._id.toString()}
            >
              <EventCard
                height={height}
                position={position}
                picture={event.picture}
                title={event.title}
                date={formatDates(event.fromDate, event.toDate)}
                location={event.location.label}
              />
            </div>
          );
        })}
      </div>

      {!!events?.length && (
        <div className="flex min-h-[70px] items-center justify-center gap-6">
          <Button
            className="w-[150px] py-2"
            text="previous"
            onClick={handlePrevious}
            disabled={!data.data?.events.pageInfo.hasPreviousPage}
          />
          <Button
            className="w-[150px] py-2"
            text="next"
            onClick={handleNext}
            disabled={!data.data?.events.pageInfo.hasNextPage}
          />
        </div>
      )}
    </div>
  );
};

export default ShowAll;
