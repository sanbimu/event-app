import Banner from '../layout/Banner';
import NewEvents from '../layout/NewEvents';
import SearchFilters from '../layout/SearchFilters';
import ShowAll from '../layout/ShowAll';

export function Index() {
  return (
    <>
      <Banner />
      <NewEvents />
      <SearchFilters />
      <ShowAll />
    </>
  );
}
