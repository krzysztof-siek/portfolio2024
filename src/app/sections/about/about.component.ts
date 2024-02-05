import {Component} from '@angular/core';
import {SectionComponent} from "../section/section.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    SectionComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
