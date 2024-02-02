import {Component, HostListener} from '@angular/core';
import {MenuInterface} from "../interfaces/menu-interface";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
  isSticky: boolean = false;
  navMenu: MenuInterface[] = [
    {id: 0, translationKey: "home", value: 'home', active: true},
    {id: 1, translationKey: "about", value: 'about', active: false},
    {id: 2, translationKey: "skills", value: 'skills', active: false},
    {id: 3, translationKey: "projects", value: 'projects', active: false},
    {id: 4, translationKey: "contact", value: 'home', active: false},
  ]

  @HostListener('window:scroll', ['$event'])
  checkScroll(event: Event) {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
