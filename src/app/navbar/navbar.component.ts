import {Component, HostListener} from '@angular/core';
import {MenuInterface} from "../interfaces/menu-interface";
import {TranslateService} from "@ngx-translate/core";
import {MatSelect} from "@angular/material/select";
import {LanguageEnum} from "../enums/language.enum";
import {LanguageInterface} from "../interfaces/language.interface";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen: boolean = true;
  isSticky: boolean = false;
  navMenu: MenuInterface[] = [
    {id: 0, translationKey: "home", value: 'home', active: true},
    {id: 1, translationKey: "about", value: 'about', active: false},
    {id: 2, translationKey: "skills", value: 'skills', active: false},
    {id: 3, translationKey: "projects", value: 'projects', active: false},
    {id: 4, translationKey: "contact", value: 'home', active: false},
  ];
  selectedCountry: LanguageEnum = LanguageEnum.POLISH;
  languages: LanguageInterface[] = [
    {name: 'Polish', value: LanguageEnum.POLISH, image: 'assets/images/countries/pl.png'},
    {name: 'English', value: LanguageEnum.ENGLISH, image: 'assets/images/countries/en.png'}
  ];
  private openingMenuSound!: HTMLAudioElement;
  private closeingMenuSound!: HTMLAudioElement;

  constructor(private translate: TranslateService) {
    this.openingMenuSound = new Audio('assets/sounds/close.mp3');
    this.closeingMenuSound = new Audio('assets/sounds/open.mp3');
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(event: Event) {
    const scrollY = window.scrollY;
    this.isSticky = scrollY > 0;
  }

  getCountryName(value: string): string {
    const country = this.languages.find(c => c.value === value);
    return country ? country.name : '';
  }

  getCountryImage(value: string): string {
    const country = this.languages.find(c => c.value === value);
    return country ? country.image : '';
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  openSelect(select: MatSelect) {
    select.open();
  }

  handleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuOpen ? this.openingMenuSound.play() : this.closeingMenuSound.play();
  }
}
