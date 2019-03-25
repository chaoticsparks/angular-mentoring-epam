import {ICourse} from './i-course';
import {IAuthorFetched} from './IAuthorFetched';

export class Course implements ICourse {
  constructor(
    public name: string,
    public date: string,
    public description: string,
    public length: number,
    public isTopRated: boolean,
    public authors: IAuthorFetched[]
  ) {}
}
