import {Component} from '@angular/core';
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public scrollService: ScrollService) {
  }
}
