import { Component } from 'react';
import { ReactNode } from 'react';
import Field from './components/Field/Field';
import Search from './components/Search/Search';

class App extends Component {
  render(): ReactNode {
    return (
      <div className="container">
        <Search />
        <Field />
      </div>
    );
  }
}

export default App;
