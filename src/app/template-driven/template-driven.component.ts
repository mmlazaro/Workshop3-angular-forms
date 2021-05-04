import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormModel } from './form-model';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  formValue =  new FormModel();

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.warn(form.value);
  }

}
