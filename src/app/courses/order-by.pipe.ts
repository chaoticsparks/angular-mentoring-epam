import { Pipe, PipeTransform } from '@angular/core';
import {ICourseFetched} from './ICourseFetched';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(collection: any[], criteria: string, args?: any): any {
    if (collection !== undefined && criteria === 'date') {
      return collection.sort((a: ICourseFetched, b: ICourseFetched) => {
        return  Date.parse(b[criteria]) - Date.parse(a[criteria]);
      });
    } else {
      return collection;
    }

  }

}
