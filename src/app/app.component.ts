import { Component, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { SignInDrivenComponent } from './sign-in-driven/sign-in-driven.component';
import { OverflowTooltipDirective } from './app.overflow.tooltip.directive';
import { NgFor } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from "./users/users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateDrivenFormComponent, SignInDrivenComponent, OverflowTooltipDirective, NgFor, ReactiveFormsModule, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formProject';
  
  products =[
    {
      id: 474,
      name: 'asd'
    },
    {
      id: 2,
      name: 'asd'
    },
    {
      id: 98,
      name: 'asd'
    }
  ]

  // signInForm = new FormGroup({
  //   login: new FormControl(''),
  //   password: new FormControl(''),
  // })

  signInForm: FormGroup 
  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      login: [''],
      password: [''],
      addresses: this.formBuilder.array([
        ''
      ])
    })
  }

  getAddresses() {
    return this.signInForm.get('addresses') as FormArray
  }

  onSubmit() {
     if(this.signInForm.valid) {
       console.log('this.signInForm', this.signInForm)
     }
  }

  addAddress() {
    this.getAddresses().push(this.formBuilder.control(''))
  }

  onRemove(i: number) {
    this.getAddresses().removeAt(i);
  }

  onReset() {
    this.signInForm.reset({
      login: 'asd'
    });
  }
  
}
