import React from 'react';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import { useSearchFiltersContext } from '../hooks';
import { SearchFilter, filterButtons } from '../shared/constants';

const SearchFilters: React.FC = () => {
  const { searchFilters, setSearchFilters, setSearchQuery } = useSearchFiltersContext();

  const handleFilterClick = (filter: SearchFilter) => {
    setSearchFilters((prev) => {
      const value = prev[filter.type] === filter.value ? '' : filter.value;
      return { ...prev, [filter.type]: value };
    });
  };

  return (
    <div className="flex flex-col gap-6 border-b border-black px-4 pb-8 pt-4 md:items-center lg:w-auto lg:px-12">
      <Searchbar onChange={(e) => setSearchQuery(e.target.value)} />

      <div className="flex w-full flex-row flex-wrap gap-3 font-franklin text-[15px] font-light lg:w-auto">
        {filterButtons.map((filter) => {
          const isActive = Object.values(searchFilters).includes(filter.value);
          return (
            <Button
              key={filter.value}
              className={`h-[38px] px-3 ${isActive ? 'text-dark-pink' : ''}`}
              text={filter.label}
              onClick={() => handleFilterClick(filter)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchFilters;
