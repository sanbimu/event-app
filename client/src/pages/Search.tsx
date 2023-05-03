import Header from '../layout/Header';
import SearchFilter from '../layout/SearchFilter';

export function Search() {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <Header />
      <div className="w-screen flex-col lg:ml-[240px] lg:flex">
        <SearchFilter />
      </div>
    </div>
  );
}
