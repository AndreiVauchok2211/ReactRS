import { Component } from 'react';
import { ReactNode } from 'react';
import CoctailData from '../CocktailData/CoctailData';
import { clsx } from '../../utils/utils';
import styles from './Field.module.css';

class Field extends Component {
  render(): ReactNode {
    return (
      <div className={clsx(styles.container, styles.container__field)}>
        <CoctailData />
      </div>
    );
  }
}

export default Field;
