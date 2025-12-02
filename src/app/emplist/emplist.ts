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
    { fullName: 'Aiko Tanaka', role: 'Lead Engineer', email: 'sample1@email.com', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=12' },
    { fullName: 'Marcus Lee', role: 'Art Director', email: 'sample2@email.com', status: 'Active', avatar: 'https://i.pravatar.cc/150?img=5' },
    { fullName: 'Sara Gomez', role: 'Product Manager', email: 'sample3@email.com', status: 'Inactive', avatar: 'https://i.pravatar.cc/150?img=32' }
  ];
}
