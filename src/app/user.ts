import { IUser } from './iuser';

export class User implements IUser {
  firstName!: string;
  id!: number;
  lastName!: string;
}
