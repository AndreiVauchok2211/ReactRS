import { CoctailData } from '../CocktailData/index';
import { clsx } from '../../utils/clsx';
import styles from './Field.module.css';

export function Field() {
  return (
    <div className={clsx(styles.container, styles.container__field)}>
      <CoctailData />
    </div>
  );
}
