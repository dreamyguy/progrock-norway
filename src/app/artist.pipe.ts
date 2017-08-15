import { Pipe, PipeTransform } from '@angular/core';
import { Artists } from './data/artists';

@Pipe({
  name: 'artistFilter',
  pure: false
})
export class ArtistPipe implements PipeTransform {
  transform(data: any, toMatch: any): any {
    if (!data || !data.length) {
      return [];
    }
    if (!toMatch) {
      return data;
    }
    return data.filter(a => a.name.toUpperCase().indexOf(toMatch.toUpperCase()) !== -1);
  }
}
