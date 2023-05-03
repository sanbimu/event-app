import Banner from '../layout/Banner';
import Header from '../layout/Header';
import NewEvents from '../layout/NewEvents';
import SearchFilter from '../layout/SearchFilter';
import ShowAll from '../layout/ShowAll';

export function Index() {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <Header />
      <div className="flex-col lg:flex">
        <Banner />
        <NewEvents />
        <SearchFilter />
        <ShowAll />
      </div>
    </div>
  );
}
