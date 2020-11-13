import { Pipe, PipeTransform } from '@angular/core';
import { IInfosTitle } from '../interfaces/IInfos';

@Pipe({
  name: 'infosTitle'
})
export class InfosTitlePipe implements PipeTransform {

  transform(infosTitle: IInfosTitle): string {
    return `${infosTitle.title.charAt(0).toUpperCase() + infosTitle.title.slice(1).toLowerCase()} - ${infosTitle.date}`;
  }

}
