import { Field } from './components/Field/index';
import { Search } from './components/Search/index';

export function App() {
  return (
    <div className="container">
      <h1>
        Search does not work, second task funcionality is not implemented, no
        routing
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
