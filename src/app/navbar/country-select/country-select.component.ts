import {Component, OnInit} from '@angular/core';
import {LanguageEnum} from "../../enums/language.enum";
import {LanguageInterface} from "../../interfaces/language.interface";
import {TranslateService} from "@ngx-translate/core";
import {MAT_SELECT_CONFIG} from "@angular/material/select";

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrl: './country-select.component.scss',
  providers: [
    {
      provide: MAT_SELECT_CONFIG,
      useValue: {overlayPanelClass: 'language-select-panel'}
    }
  ],
})
export class CountrySelectComponent implements OnInit {
  selectedCountry: LanguageEnum = LanguageEnum.POLISH;
  languages: LanguageInterface[] = [
    {name: 'Polish', value: LanguageEnum.POLISH, image: 'assets/images/countries/pl.png'},
    {name: 'English', value: LanguageEnum.ENGLISH, image: 'assets/images/countries/en.png'}
  ];

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    const lang: string | null = localStorage.getItem('language');
    if (lang) {
      this.selectedCountry = lang as LanguageEnum;
      this.translate.use(lang);
    }
  }

  getCountryImage(value: string): string {
    const country: LanguageInterface | undefined = this.languages.find(c => c.value === value);
    return country ? country.image : '';
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

}
