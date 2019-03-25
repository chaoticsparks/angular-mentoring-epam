import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if (isNaN(value)) {
      return '';
    }
    const hours = Math.trunc(value / 60);
    const minutes = value % 60;
    return hours ? `${hours} h ${minutes} min` : `${minutes} min`;
  }

}
