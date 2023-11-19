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
  // const [error, setError] = useState<Error | null>(null);
  // const [isLoaded, setIsLoaded] = useState<boolean>(false);
  // const { search, items, setItems } = useContext(SearchContext);
  const { search, setItems } = useContext(SearchContext);

  const { isLoading, isError, data } = useSearchObjQuery(search);
  const items = (data ? data.astronomicalObjects : []) as AstronomicalObject[];
  // console.log(items);

  useEffect(() => {
    // fetch(`${BASE_URL}?name=${search}`, {
    //   method: 'POST',
    //   redirect: 'follow',
    // })
    //   .then((res) => res.json() as Promise<AstronomicalObjectBaseResponse>)
    //   .then(
    //     (result) => {
    //       setIsLoaded(true);
    //       setItems(result.astronomicalObjects);
    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   );
  }, [search, setItems]);
  if (isError) {
    return <p> Error:</p>;
    // if (error) {
    //   return <p> Error: {error.message}</p>;
  } else if (!isLoading) {
    // } else if (!isLoaded) {
    return <p> Loading... </p>;
  } else {
    return (
      <div className={clsx(styles.container, styles.container__field)}>
        <ul className={styles.coctail__list}>
          {items.map((item: AstronomicalObject) => (
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
