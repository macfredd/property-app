import { Component } from '@angular/core';
import { HeroSection } from '../../features/hero-section/hero-section';
import { FeaturedProperties } from '../../features/featured-properties/featured-properties';
import { CategorySection } from '../../features/category-section/category-section';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeroSection, FeaturedProperties, CategorySection],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
