import { clsx } from '../../utils/utils';
import styles from './Search.module.css';

function Search() {
  return (
    <div className={clsx(styles.form__container)}>
      <form className={styles.form}>
        <input
          className={clsx(styles.input)}
          type="text"
          placeholder="Enter cocktail"
        />
        <button
          className={clsx(styles.button, styles.button__submit)}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
