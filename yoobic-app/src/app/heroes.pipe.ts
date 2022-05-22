import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroes'
})
export class HeroesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
