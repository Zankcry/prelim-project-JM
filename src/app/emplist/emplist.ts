import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-emplist',
  imports: [CommonModule, RouterLink],
  templateUrl: './emplist.html',
  styleUrls: ['./emplist.css'],
})
export class Emplist {
  employees: any[] = [
    { employeeNumber: 'EMP-1', fullName: 'Flins', gender: 'Male', role: 'Lead Engineer', email: 'flinsishandsome@email.com', status: 'Active', salary: 99999, avatar: 'Flins_Icon.webp' },
    { employeeNumber: 'EMP-2', fullName: 'Lauma', gender: 'Female', role: 'Art Director', email: 'laumaiselegant@email.com', status: 'Active', salary: 88888, avatar: 'Lauma_Icon.webp' },
    { employeeNumber: 'EMP-3', fullName: 'Nefer', gender: 'Female', role: 'Product Manager', email: 'neferistoosmart@email.com', status: 'Inactive', salary: 77777, avatar: 'Nefer_Icon.webp' }
  ];

  // Hero / page content properties
  title = 'Our People';
  subtitle = 'Team';
  description = 'Meet the engineers, artists, and designers building our universes.';
  imageUrl = 'https://fastcdn.hoyoverse.com/content-v2/plat/127289/95e670c6e08c4da1a76d886a7253134d_4088644788282388127.png';

}

