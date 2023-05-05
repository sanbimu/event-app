import React from 'react';

interface NewEventProps {
  className?: string;

  children: React.ReactNode;
}

const NewEvent: React.FC<NewEventProps> = ({ className, children }) => {
  return (
    <div className="flex w-full flex-row border border-black shadow-custom">
      {children}
    </div>
  );
};

export default NewEvent;
