import { Component } from 'react';
import { ReactNode } from 'react';
import Field from './components/Field/Field';
import Form from './components/Form/Form';

class App extends Component {
  render(): ReactNode {
    return (
      <div className="container">
        <h2 className="info">
          Hi, still not have worked out how to fulfil all the conditions of the
          task - will try to do during the cross check. I not can say if the
          functionality will work out in the end. Please check my work last.
          P.S.: If you can help me with the work and the course, please write to
          me in private messages.
        </h2>
        <Form />
        <Field />
      </div>
    );
  }
}

export default App;
