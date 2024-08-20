import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit{
  signInModel = {
    login: '',
    password: '',
    confirmPassword: ''

  }
   ngOnInit() {
   }

   onSubmit(event: SubmitEvent): void {
     console.log('event', event)
     console.log('signInModel', this.signInModel)
   }
}
