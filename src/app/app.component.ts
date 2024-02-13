import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {register} from 'swiper/element/bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio2024';
  isLoaded = false;

  constructor(private translate: TranslateService) {
    register();
    translate.setDefaultLang('pl');
  }

  ngOnInit() {
    // TODO: Trzeba zmienić logikę wyświetlania loadera
    setTimeout(() => {
      this.isLoaded = true;
    }, 500)
  }


}
