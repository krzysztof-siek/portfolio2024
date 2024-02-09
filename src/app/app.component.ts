import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {register} from 'swiper/element/bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio2024';

  constructor(private translate: TranslateService) {
    register();
    translate.setDefaultLang('pl');
  }
}
