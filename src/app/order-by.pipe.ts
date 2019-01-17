import { Pipe, PipeTransform } from '@angular/core';
import {ICourse} from './icourse';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(collection: any[], criteria: string, args?: any): any {
    return collection.sort((a: ICourse, b: ICourse) => {
      return  b[criteria] - a[criteria];
    });
  }

}
