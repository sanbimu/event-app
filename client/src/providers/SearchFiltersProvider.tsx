import { createContext, PropsWithChildren, useState } from 'react';

const defaultValues = { date: '', price: '', type: '', label: '' };

export const SearchFiltersContext = createContext({
  searchFilters: { date: '', price: '', type: '', label: '' },
  setSearchFilters: (filters: (prev: typeof defaultValues) => typeof defaultValues) => {},
  searchQuery: '',
  setSearchQuery: (query: string) => {},
});

export function SearchFiltersProvider({ children }: PropsWithChildren) {
  const [searchFilters, setSearchFilters] = useState({
    date: '',
    price: '',
    type: '',
    label: '',
  });
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchFiltersContext.Provider
      value={{ searchFilters, setSearchFilters, searchQuery, setSearchQuery }}
    >
      {children}
    </SearchFiltersContext.Provider>
  );
}
