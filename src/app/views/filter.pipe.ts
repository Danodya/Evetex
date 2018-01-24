import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( organizerArray: any, organizername?: any): any {
    if(organizername === undefined){return  organizerArray}
    return  organizerArray.filter(function(organizer){
        return organizer.name.toLowerCase().includes(organizername.toLowerCase());

    });
  }

}
