import { CoctailData } from './components/CocktailData';
import { Search } from './components/Search';
import { ErrorBoundary } from './components/ErrorBoundary';
// import { ISearch } from './types/types';
// import { useState } from 'react';
// import { SearchContext } from './Contexst';
// import { AstronomicalObject } from './types/types';
import { Provider } from './Provider';

export function App() {
  // const [search, setSearch] = useState(localStorage.getItem('value') || '');
  // const [items, setItems] = useState<AstronomicalObject[]>([]);

  // const changeSearch = (str: string): void => {
  //   setSearch(str);
  // };

  // const valueSearch: string = search;

  return (
    <div className="container">
      <h1>
        Search does not work, second task funcionality is not implemented, no
        routing
      </h1>
      <ErrorBoundary>
        <Provider>
          {/* <SearchContext.Provider value={search}> */}
          {/* <SearchContext.Provider value={{ search, setSearch, items, setItems }}> */}
          {/* <Search onSearch={changeSearch} search={search} /> */}
          <Search />
          {/* <CoctailData search={search} /> */}
          <CoctailData />
          {/* </SearchContext.Provider> */}
        </Provider>
      </ErrorBoundary>
    </div>
  );
}
