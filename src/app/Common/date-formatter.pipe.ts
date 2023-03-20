import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: any, dateFormat: string) {
   let result =  moment(value).format(dateFormat);
    return result;
  }

}
