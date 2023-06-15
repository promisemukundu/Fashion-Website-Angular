import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: any[] = []

  onAddContactForm(form: NgForm) {
    this.contactForm.push(form.value)
    console.log(form.value);
    console.log(this.contactForm);

    form.reset()


  }
}
