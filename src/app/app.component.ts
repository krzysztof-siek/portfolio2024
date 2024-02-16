import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {register} from 'swiper/element/bundle';
import {LoadService} from "./services/load.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio2024';
  animationVisible = false;

  constructor(private translate: TranslateService, protected loadService: LoadService) {
    register();
    translate.setDefaultLang('pl');
  }

}
