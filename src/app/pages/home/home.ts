import { Component } from '@angular/core';
import { HeroSection } from '../../features/hero-section/hero-section';
import { CategorySection } from '../../features/category-section/category-section';
import { FeaturedSection } from '../../features/featured-section/featured-section';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeroSection, FeaturedSection, CategorySection],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
