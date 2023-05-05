import React from 'react';
import EventCard from '../components/EventCard';
import { events } from '../shared/constants';
import ShowOne from '../components/windows/ShowOne';
import { useWindowContext } from '../hooks';

const MyEvent: React.FC = () => {
  const { openWindow } = useWindowContext();

  const handleShowOne = () => {
    openWindow({ content: <ShowOne /> });
  };

  return (
    <>
      <div
        className="border-overlap-br flex cursor-pointer break-inside-avoid p-4"
        onClick={handleShowOne}
      >
        <EventCard
          height={170}
          position={1}
          picture={'https://i.imgur.com/zHN8Neu.png'}
          title={'Coucou'}
          date={'date'}
          location={'location'}
        />
      </div>
    </>
  );
};

export default MyEvent;
