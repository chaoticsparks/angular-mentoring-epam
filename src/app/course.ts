import { ICourse } from './icourse';

export class Course implements ICourse {
  constructor(
    public id: number,
    public title: string,
    public creationDate: string,
    public description: string,
    public duration: string
  ) {}
}
