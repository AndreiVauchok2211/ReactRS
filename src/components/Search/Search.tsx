import { useState } from 'react';
import { clsx } from '../../utils/clsx';
import styles from './Search.module.css';
import { ChangeEvent } from 'react';
import { FormEvent } from 'react';
import { SearchInputProps } from './searchInterfase';

export const Search: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');

  function inputChangeHundler(event: ChangeEvent<HTMLInputElement>): void {
    setSearch(event.target.value.trim());
  }

  function inputSearchHunder(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSearch(search);
    localStorage.setItem('search', search);
  }

  return (
    <div className={clsx(styles.form__container)}>
      <form className={styles.form} onSubmit={inputSearchHunder}>
        <input
          className={clsx(styles.input)}
          type="text"
          placeholder="search does not work"
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
