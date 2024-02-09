import {Component} from '@angular/core';
import {SkillsInterface} from "../../interfaces/skills.interface";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  listOfSkills: SkillsInterface[] = [
    {id: 0, name: 'HTML / CSS / RWD', value: 95},
    {id: 1, name: 'JavaScript / TypeScript', value: 85},
    {id: 2, name: 'Angular / RxJS', value: 85},
    {id: 3, name: 'Angular Materials / Bootstrap', value: 85},
    {id: 4, name: 'Docker / Rest API', value: 70},
    {id: 5, name: 'Git / GitHub / Stash', value: 80},
    {id: 6, name: 'Jira / Confluence', value: 80},
    {id: 7, name: 'Figma', value: 70}
  ]

}
