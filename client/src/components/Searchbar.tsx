import React, { InputHTMLAttributes } from 'react';

const Searchbar: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return (
    <div className="flex px-8">
      <p className="pr-2 pt-4 font-fromage text-2xl font-light">search</p>
      <input
        id="search"
        className="mt-[8px] h-[32px] w-[264px] border-b border-black bg-transparent pt-4 font-franklin text-lg lg:w-[35vw]"
        {...props}
      ></input>
    </div>
  );
};

export default Searchbar;
