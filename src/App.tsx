import { CoctailData } from './components/CocktailData';
import { Search } from './components/Search';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Provider } from './Provider';
import { HeadMessage } from './components/HeadMessage';

export function App() {
  return (
    <ErrorBoundary>
      <Provider>
        <HeadMessage />
        <Search />
        <CoctailData />
      </Provider>
    </ErrorBoundary>
  );
}
