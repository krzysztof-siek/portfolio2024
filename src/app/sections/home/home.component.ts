import {Component} from '@angular/core';
import {SectionComponent} from "../section/section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
