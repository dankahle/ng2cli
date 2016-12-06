import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubler'
})
export class DoublerPipe {

  multiple:number;

  transform(value: number, mult: number): number {
    if (mult) {
      this.multiple = mult;
      return value * mult;
    }
    else {
      return value * this.multiple;
    }
  }


}
