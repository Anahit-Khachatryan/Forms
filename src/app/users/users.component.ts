import { DatePipe, JsonPipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MyUpperCasePipe } from '../uppercase.pipe';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, UpperCasePipe, MyUpperCasePipe, DatePipe, JsonPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
   users = [
    {
      id: 1,
      name: 'John',
      birthDate: new Date()
    },
    {
      id: 2,
      name: 'Paul',
      birthDate: new Date()
    },
    {
      id: 3,
      name: 'Mary',
      birthDate: new Date()
    },
   ]

   onClick() {
     this.users[1].name = 'Ashot'
   }
}
