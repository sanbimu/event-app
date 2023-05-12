import React from 'react';
import EventCard from '../components/EventCard';
import { events } from '../shared/constants';
import ShowOne from '../components/windows/ShowOne';
import { useWindowContext } from '../hooks';
import { ObjectId } from 'mongodb';
import { Event } from '../graphql';
import { formatDates } from '../utils/format';

interface MyEventProps {
  event: Event;
}

const MyEvent: React.FC<MyEventProps> = ({ event }) => {
  const { openWindow } = useWindowContext();

  const handleShowOne = (id: ObjectId) => {
    openWindow(<ShowOne id={id} />);
  };

  return (
    <>
      <div
        className="border-overlap-br flex cursor-pointer break-inside-avoid p-4"
        onClick={() => handleShowOne(event._id)}
      >
        <EventCard
          height={170}
          position={1}
          picture={event.picture}
          title={event.title}
          date={formatDates(event.fromDate, event.toDate)}
          location={event.location.label}
        />
      </div>
    </>
  );
};

export default MyEvent;
