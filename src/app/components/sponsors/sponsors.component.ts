import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css'
})

export class SponsorsComponent implements OnInit {

  sponsors = [
    { name: 'Sponsor 1', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 2', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 3', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 4', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 5', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 6', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 7', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 8', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 9', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 10', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 11', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 12', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 13', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 14', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 15', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 16', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 17', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 18', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 19', logo: 'https://via.placeholder.com/150' },
    { name: 'Sponsor 20', logo: 'https://via.placeholder.com/150' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
