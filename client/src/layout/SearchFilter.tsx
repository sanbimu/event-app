import React from 'react';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import { filterButtons } from '../shared/constants';

const SearchFilter: React.FC = () => {
  return (
    <div className="flex flex-col md:items-center lg:w-auto">
      <div className="pt-4">
        <Searchbar />
      </div>

      <div className="flex w-full flex-row flex-wrap gap-3 border-b border-black pt-6 pl-4 pr-1 pb-8 lg:w-auto lg:px-12">
        {filterButtons.map((filter) => {
          return (
            <Button
              className="h-[38px] px-3 font-franklin text-[15px] font-light"
              text={filter.label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchFilter;
