import { createContext } from 'react';
import { AstronomicalObject } from './types/types';

export interface ISearchConrextData {
  search: string;
  setSearch: (search: string) => void;
  items: AstronomicalObject[];
  setItems: (items: AstronomicalObject[]) => void;
}

export const SearchContext = createContext<ISearchConrextData>({
  search: '',
  setSearch: () => {},
  items: [],
  setItems: () => {},
});
