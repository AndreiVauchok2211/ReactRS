import { clsx } from '../../utils/clsx';
import { useEffect, useState } from 'react';
import styles from './CoctailData.module.css';

// const BASE_PATH =
//   'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

// type ComponentState = {
//   error: null | Error;
//   isLoaded: boolean;
//   items: [];
// };

interface IDrinks {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export function CoctailData() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<IDrinks[]>([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.drinks);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(items);

  if (error) {
    return <p> Error {error.message}</p>;
  } else if (!isLoaded) {
    return <p> Loading... </p>;
  } else {
    return (
      <ul className={clsx(styles.coctail__list)}>
        {items.map((item: IDrinks) => (
          <li className={clsx(styles.coctail__item)} key={item.idDrink}>
            <p className={clsx(styles.coctail__text)}>{item.strDrink}</p>
            <img
              className={clsx(styles.coctail__image)}
              src={item.strDrinkThumb}
              alt={item.strDrink}
            />
          </li>
        ))}
      </ul>
    );
  }
}
