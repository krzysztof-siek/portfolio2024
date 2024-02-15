import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.minLength(3)]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  onSubmit(): void {
    const hiddenForm = document.querySelector('#hiddenForm') as HTMLFormElement;
    (hiddenForm.querySelector('#name') as HTMLInputElement).value = this.contactForm.value.name || '';
    (hiddenForm.querySelector('#email') as HTMLInputElement).value = this.contactForm.value.email || '';
    (hiddenForm.querySelector('#subject') as HTMLInputElement).value = this.contactForm.value.subject || '';
    (hiddenForm.querySelector('#message') as HTMLInputElement).value = this.contactForm.value.message || '';

    hiddenForm.submit();
  }

}
