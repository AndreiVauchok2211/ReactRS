import { Page } from '../components/CocktailData/CoctailData';
import { AstronomicalObject } from './AstronomicalObject.type';

export interface AstronomicalObjectBaseResponse {
  page: Page;
  sort: { clauses: string[] };
  astronomicalObjects: AstronomicalObject[];
}
