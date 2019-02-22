import {ICourse} from './i-course';

export class Course implements ICourse {
  constructor(
    public name: string,
    public date: string,
    public description: string,
    public length: number,
    public isTopRated: boolean
  ) {}
}
