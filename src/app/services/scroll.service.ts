import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() {
  }

  scrollTo(sectionId: string): void {
    const element: HTMLElement = document.querySelector('#' + sectionId) as HTMLElement;
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

}
