import {Component} from '@angular/core';
import {SectionComponent} from "../section/section.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SectionComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
