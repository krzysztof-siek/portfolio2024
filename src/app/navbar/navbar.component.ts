import {Component, HostListener} from '@angular/core';
import {MenuInterface} from "../interfaces/menu.interface";
import {TranslateService} from "@ngx-translate/core";
import {LanguageEnum} from "../enums/language.enum";
import {LanguageInterface} from "../interfaces/language.interface";
import {MAT_SELECT_CONFIG} from "@angular/material/select";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [
    {
      provide: MAT_SELECT_CONFIG,
      useValue: {overlayPanelClass: 'language-select-panel'}
    }
  ],
})
export class NavbarComponent {
  isMenuOpen: boolean = true;
  isSticky: boolean = false;
  navMenu: MenuInterface[] = [
    {id: 0, translationKey: "home", value: 'home', active: true, href: "#home"},
    {id: 1, translationKey: "about", value: 'about', active: false, href: "#about"},
    {id: 2, translationKey: "skills", value: 'skills', active: false, href: "#skills"},
    {id: 3, translationKey: "hobby", value: 'hobby', active: false, href: "#hobby"},
    {id: 4, translationKey: "projects", value: 'projects', active: false, href: "#projects"},
    {id: 5, translationKey: "contact", value: 'contact', active: false, href: "#contact"},
  ];
  selectedCountry: LanguageEnum = LanguageEnum.POLISH;
  languages: LanguageInterface[] = [
    {name: 'Polish', value: LanguageEnum.POLISH, image: 'assets/images/countries/pl.png'},
    {name: 'English', value: LanguageEnum.ENGLISH, image: 'assets/images/countries/en.png'}
  ];
  private openingMenuSound!: HTMLAudioElement;
  private closingMenuSound!: HTMLAudioElement;

  constructor(private translate: TranslateService) {
    this.openingMenuSound = new Audio('assets/sounds/open.mp3');
    this.closingMenuSound = new Audio('assets/sounds/close.mp3');
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(event: Event) {
    const scrollY = window.scrollY;
    this.isSticky = scrollY > 0;
  }

  isSectionInView(sectionId: string): boolean {
    const section: HTMLElement | null = document.getElementById(sectionId);
    if (section) {
      const bounds: DOMRect = section.getBoundingClientRect();
      const halfViewportHeight: number = window.innerHeight / 2;
      return bounds.top <= halfViewportHeight && bounds.bottom >= halfViewportHeight;
    }
    return false;
  }

  getCountryImage(value: string): string {
    const country: LanguageInterface | undefined = this.languages.find(c => c.value === value);
    return country ? country.image : '';
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  handleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuOpen ? this.openingMenuSound.play() : this.closingMenuSound.play();
  }

  scrollToSection(sectionId: string): void {
    const section: HTMLElement | null = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }
}
