import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  signUpForm!: FormGroup

  public constructor() {
    this.signUpForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      apartment: new FormControl(null, Validators.required),
      town: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      postcode: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.signUpForm);

  }
}
