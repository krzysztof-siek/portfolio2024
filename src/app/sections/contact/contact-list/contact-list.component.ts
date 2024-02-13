import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {ContactInterface} from "../../../interfaces/contact.interface";

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {
  contactList: ContactInterface[] = [
    {id: 0, name: "phone", value: "663-271-178", icon: "phone"},
    {id: 2, name: "website", value: "www.krzysztof-siek.pl", icon: "computer"},
    {id: 1, name: "email", value: "krzysztof.siek01@gmail.com", icon: "email"},
  ]

}
