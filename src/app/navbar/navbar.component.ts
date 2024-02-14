import {Component, HostListener, OnInit} from '@angular/core';
import {MenuInterface} from "../interfaces/menu.interface";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = true;
  isSticky: boolean = true;
  navMenu: MenuInterface[] = [
    {id: 0, translationKey: "home", value: 'home', active: true, href: "#home"},
    {id: 1, translationKey: "about", value: 'about', active: false, href: "#about"},
    {id: 2, translationKey: "skills", value: 'skills', active: false, href: "#skills"},
    {id: 3, translationKey: "hobby", value: 'hobby', active: false, href: "#hobby"},
    {id: 4, translationKey: "projects", value: 'projects', active: false, href: "#projects"},
    {id: 5, translationKey: "contact", value: 'contact', active: false, href: "#contact"},
  ];
  private openingMenuSound!: HTMLAudioElement;
  private closingMenuSound!: HTMLAudioElement;

  constructor() {
    this.openingMenuSound = new Audio('assets/sounds/open.mp3');
    this.closingMenuSound = new Audio('assets/sounds/close.mp3');
  }

  ngOnInit() {
    this.isMenuOpen = !window.matchMedia('(max-width: 992px)').matches;
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
