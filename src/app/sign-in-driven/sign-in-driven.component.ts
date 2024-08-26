import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-driven',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './sign-in-driven.component.html',
  styleUrl: './sign-in-driven.component.css'
})
export class SignInDrivenComponent {
  // input = new FormControl('initial value', [Validators.required, Validators.minLength(10)]); //inputnern en, FormGroup forman e
   @ViewChild(FormGroupDirective) fg: FormGroup |  undefined //directiven el enk karoghanum viewChild-ov vercnel. Vonc e 
    // formControlName-in tesnum, qani vor input gtnvum en formi mej viewChildren e arats FormControlDirective , ed control valuen vercnum e, gropuic gtnum e ed controly tanum valuen kpcnum e
   
  signInForm = new FormGroup({
    login: new FormControl('initil', [Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
  })

  ngAfterViewInit() {
    console.log(111, this.fg)
  }

  handleClick() {
    // console.log(this.input)
  }

  onSumbit() {
    console.log('this.signInForm', this.signInForm)
     if (this.signInForm.invalid) {
      return ; //kani vor user kara gna buttoni vrayic disable buttony hani, dra hamar mi hat el estegh enk check anum
     }
  }
}
