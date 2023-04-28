import React from 'react';

interface NewEventProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

const NewEvent: React.FC<NewEventProps> = ({ className, onClick, children }) => {
  return (
    <div
      className="flex w-full flex-row border border-black shadow-custom"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default NewEvent;
