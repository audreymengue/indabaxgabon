import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // <-- Import CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isScrolled = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50; // Adjust this value as per your need
  }

}
