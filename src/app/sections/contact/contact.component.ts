import {Component} from '@angular/core';
import {SectionComponent} from "../section/section.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    SectionComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
