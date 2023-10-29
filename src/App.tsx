import React from 'react';
import Field from './components/Field/Field';
import Form from './components/Form/Form';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container">
        <h2 className="info">
          Hi, still haven't worked out how to fulfil all the conditions of the
          task - will try to do during the cross check. I can't say if the
          functionality will work out in the end. Please check my work last
        </h2>
        <Form />
        <Field />
      </div>
    );
  }
}

export default App;
