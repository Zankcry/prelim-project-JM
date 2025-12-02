import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emplist',
  imports: [CommonModule],
  templateUrl: './emplist.html',
  styleUrl: './emplist.css',
})
export class Emplist {
  employees: any[] = [
    { employeeNumber: 'EMP-1', fullName: 'Aiko Tanaka', gender: 'Male', role: 'Lead Engineer', email: 'sample1@email.com', status: 'Active', salary: 99999, avatar: 'https://i.pravatar.cc/150?img=12' },
    { employeeNumber: 'EMP-2', fullName: 'Marcus Lee', gender: 'Female', role: 'Art Director', email: 'sample2@email.com', status: 'Active', salary: 88888, avatar: 'https://i.pravatar.cc/150?img=5' },
    { employeeNumber: 'EMP-3', fullName: 'Sara Gomez', gender: 'Female', role: 'Product Manager', email: 'sample3@email.com', status: 'Inactive', salary: 77777, avatar: 'https://i.pravatar.cc/150?img=32' }
  ];
}
