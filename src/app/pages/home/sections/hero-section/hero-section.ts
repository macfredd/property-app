import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {

  imageUrl: string = '';

  private images: string[] = [
    './assets/images/site/main-01.jpg',
    './assets/images/site/main-02.jpg',
    './assets/images/site/main-03.webp',
  ];

  constructor() {
    const index = Math.floor(Math.random()* this.images.length);
    this.imageUrl = this.images[index];
  }
}
