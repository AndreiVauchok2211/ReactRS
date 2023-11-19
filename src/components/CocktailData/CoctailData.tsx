import { clsx } from '../../utils/clsx';
import { useEffect } from 'react';
import styles from './CoctailData.module.css';
import { AstronomicalObject } from '../../types/AstronomicalObject.type';
import { SearchContext } from '../../Contexst';
import { useContext } from 'react';
import { useSearchObjQuery } from '../../store/astronomObject/astronomObject.api';

export type Page = {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
};

export function CoctailData() {
  const { search, setItems } = useContext(SearchContext);

  const { isLoading, isError, data } = useSearchObjQuery(search);

  useEffect(() => {}, [search, setItems]);
  if (isError) {
    return <p> Error:</p>;
  } else if (isLoading) {
    return <p> Loading... </p>;
  } else if (data) {
    return (
      <div className={clsx(styles.container, styles.container__field)}>
        <ul className={styles.coctail__list}>
          {data.astronomicalObjects.map((item: AstronomicalObject) => (
            <li className={clsx(styles.coctail__item)} key={item.uid}>
              <h5 className={clsx(styles.coctail__text)}>NAME: {item.name}</h5>
              <p className={clsx(styles.coctail__text)}>
                TYPE: {item.astronomicalObjectType}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
