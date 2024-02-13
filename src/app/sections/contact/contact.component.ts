import {Component} from '@angular/core';
import {ContactInterface} from "../../interfaces/contact.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
    // TODO: Podłączyć wysyłanie formularza pod netifly
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.minLength(3)]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  onSubmit(): void {
    console.log(this.contactForm.value)
  }
}
