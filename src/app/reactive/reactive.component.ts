import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  reactiveForm = this.fb.group({
    email: ['', Validators.email],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
    }),
    confirmed: [, Validators.required],
    comment: ['', Validators.maxLength(200)]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.warn(this.reactiveForm.value);
  }

}
