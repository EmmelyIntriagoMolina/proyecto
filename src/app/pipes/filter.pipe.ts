import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultadoCodigo = [];
    for (const post of value){
      if(post.id.indexOf(arg)> -1){
        resultadoCodigo.push(post)
      }
    }
    return resultadoCodigo;
  }

}
