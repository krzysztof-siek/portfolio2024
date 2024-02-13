import {Component, Input} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [
    TranslateModule,
    UpperCasePipe
  ],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {
  @Input() section!: string;

}
