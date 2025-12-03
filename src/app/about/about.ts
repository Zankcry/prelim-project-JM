import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
  // Hero
  title = 'Building a Virtual World for One Billion People';
  subtitle = 'Who We Are';
  description = 'At HoYoverse, we are committed to creating immersive virtual world experiences for players around the globe. We believe in the power of technology and creativity to bring people together.';

  // Mission / Vision cards
  cards = [
    { title: 'Our Mission', text: '"Tech Otakus Save the World." We focus on long-term operations, technical research, and stylistic innovation to create content that resonates with users globally.' },
    { title: 'Global Operations', text: 'Headquartered in Singapore, we have established offices in Montreal, Los Angeles, Tokyo, and Seoul to attract global talent and better serve our diverse player base.' }
  ];

  // Offices
  offices = [
    { name: 'Singapore', label: 'Headquarters' },
    { name: 'Montreal', label: 'R&D Center' },
    { name: 'Los Angeles', label: 'Operations' },
    { name: 'Tokyo', label: 'Marketing' },
    { name: 'Seoul', label: 'Localization' }
  ];

  // CTA / Footer
  ctaText = 'Ready to explore our universe?';
  backToHomeText = 'Back to Home';
  imageUrl = 'https://res.cloudinary.com/jerrick/image/upload/v1687096733/648f0d9d384f83001dea7879.jpg';

}
