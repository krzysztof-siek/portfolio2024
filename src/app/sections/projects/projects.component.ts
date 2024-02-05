import {Component} from '@angular/core';
import {SectionComponent} from "../section/section.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SectionComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
