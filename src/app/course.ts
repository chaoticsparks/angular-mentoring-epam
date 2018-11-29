import { ICourse } from './icourse';

export class Course implements ICourse{
  id: number;
  title: string;
  creationDate: string;
  description: string;
  duration: number;
}
