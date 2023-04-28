import React from 'react';

const Searchbar: React.FC = () => {
  return (
    <>
      <div className="flex px-8 lg:hidden">
        <p className="pr-2 pt-4 font-fromage text-2xl font-light">search</p>
        <input
          id="search"
          className="mt-[8px] h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
          size={25}
        ></input>
      </div>

      <div className="hidden px-8 lg:flex">
        <p className="pr-2 pt-4 font-fromage text-2xl font-light">search</p>
        <input
          id="search"
          className="mt-[8px] h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
          size={55}
        ></input>
      </div>
    </>
  );
};

export default Searchbar;
