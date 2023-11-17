import { useState } from 'react';
import { SearchContext } from './Contexst';
import { ProviderProps } from './types/types';
import { AstronomicalObject } from './types/AstronomicalObject.type';

export function Provider({ children }: ProviderProps) {
  const [search, setSearch] = useState(localStorage.getItem('value') || '');
  const [items, setItems] = useState<AstronomicalObject[]>([]);

  return (
    <SearchContext.Provider value={{ search, setSearch, items, setItems }}>
      {children}
    </SearchContext.Provider>
  );
}
