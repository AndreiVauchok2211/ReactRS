import { Field } from './components/Field/index';
import { Search } from './components/Search/index';

export function App() {
  return (
    <div className="container">
      <h1>
        Search does not work search does not work, the second tasks funcionals
        are not implemented
      </h1>
      <Search
        onSearch={function (search: string): void {
          console.log(search);
          throw new Error('Function not implemented.');
        }}
      />
      <Field />
    </div>
  );
}
