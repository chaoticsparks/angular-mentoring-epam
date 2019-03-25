import {IAuthorFetched} from './IAuthorFetched';

export interface ICourse {
  name: string;
  date: string;
  length: number;
  description: string;
  isTopRated: boolean;
  authors: IAuthorFetched[];
  [key: string]: any;
}
