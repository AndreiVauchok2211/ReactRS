import { clsx } from '../../utils/utils';
import { Component } from 'react';
import { ReactNode } from 'react';
import styles from './CoctailData.module.css';

const BASE_PATH =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

type ComponentState = {
  error: null | Error;
  isLoaded: boolean;
  items: [];
};

interface IDrinks {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

class CoctailData extends Component<NonNullable<unknown>, ComponentState> {
  constructor(props: NonNullable<unknown>) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(`${BASE_PATH}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result.drinks,
        });
      }),
      (error: Error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      };
  }

  render(): ReactNode {
    const { error, isLoaded, items } = this.state;

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
}

export default CoctailData;
