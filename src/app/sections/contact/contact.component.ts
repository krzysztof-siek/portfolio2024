import {Component} from '@angular/core';
import {ContactInterface} from "../../interfaces/contact.interface";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactList: ContactInterface[] = [
    {id: 0, name: "phone", value: "663-271-178", icon: "phone"},
    {id: 1, name: "email", value: "krzysztof.siek01@gmail.com", icon: "email"},
    {id: 2, name: "website", value: "www.krzysztof-siek.pl", icon: "computer"},
  ]

  contactForm = new FormGroup({
    // TODO: zastanowić się nad walidację
    name: new FormControl('',),
    email: new FormControl('',),
    subject: new FormControl('',),
    message: new FormControl('',)
  })

  onSubmit(): void {
    console.log('dziala')
  }
}
