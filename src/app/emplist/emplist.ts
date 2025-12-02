import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-emplist',
  imports: [CommonModule, RouterLink],
  templateUrl: './emplist.html',
  styleUrl: './emplist.css',
})
export class Emplist {
  employees: any[] = [
    { employeeNumber: 'EMP-1', fullName: 'Flins', gender: 'Male', role: 'Lead Engineer', email: 'flinsishandsome@email.com', status: 'Active', salary: 99999, avatar: 'Flins_Icon.webp' },
    { employeeNumber: 'EMP-2', fullName: 'Lauma', gender: 'Female', role: 'Art Director', email: 'laumaiselegant@email.com', status: 'Active', salary: 88888, avatar: 'Lauma_Icon.webp' },
    { employeeNumber: 'EMP-3', fullName: 'Nefer', gender: 'Female', role: 'Product Manager', email: 'neferistoosmart@email.com', status: 'Inactive', salary: 77777, avatar: 'Nefer_Icon.webp' }
  ];
}

