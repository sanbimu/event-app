import Header from '../layout/Header';
import SearchFilters from '../layout/SearchFilters';
import ShowAll from '../layout/ShowAll';

export function Search() {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <Header />
      <div className="w-screen flex-col lg:ml-[240px] lg:flex">
        <SearchFilters />
        <ShowAll />
      </div>
    </div>
  );
}
