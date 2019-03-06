import {IUser} from './i-user';

export class User implements IUser {
  name!: {
    first: string,
    last: string,
  };
}
