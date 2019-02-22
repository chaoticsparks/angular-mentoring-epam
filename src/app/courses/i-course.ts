export interface ICourse {
  name: string;
  date: string;
  length: number;
  description: string;
  isTopRated: boolean;
  [key: string]: any;
}
