export interface ICourseService {
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;
  [key: string]: any;
}
