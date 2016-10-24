import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pip'
})
export class PipPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value + 'append';
  }

}
