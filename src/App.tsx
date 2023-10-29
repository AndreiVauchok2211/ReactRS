import React from 'react';
import Field from './components/Field/Field';
import Form from './components/Form/Form';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container">
        <Form />
        <Field />
      </div>
    );
  }
}

export default App;
