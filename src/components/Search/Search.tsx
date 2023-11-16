import { clsx } from '../../utils/clsx';
import styles from './Search.module.css';
import { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { SearchContext } from '../../Contexst';
import { useContext } from 'react';

export const Search: React.FC = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [value, setValue] = useState(search);

  console.log(search);

  function inputChangeHundler(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value.trim());
  }

  function inputSearchHunder(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    setSearch(value);
    localStorage.setItem('value', value);
  }

  return (
    <div className={clsx(styles.form__container)}>
      <form className={styles.form} onSubmit={inputSearchHunder}>
        <input
          value={value}
          className={clsx(styles.input)}
          type="text"
          placeholder="Search object"
          onChange={inputChangeHundler}
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
};
