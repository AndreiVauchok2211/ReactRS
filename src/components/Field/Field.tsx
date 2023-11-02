import { Component } from 'react';
import { ReactNode } from 'react';
import CoctailData from './CoctailData';
import './Field.css';

class Field extends Component {
  render(): ReactNode {
    return (
      <div className="container container__field">
        <CoctailData />
      </div>
    );
  }
}

export default Field;
