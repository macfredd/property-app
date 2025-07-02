import { Component } from '@angular/core';
import { HeroSection } from '../../features/hero-section/hero-section';
import { FeaturedProperties } from '../../features/featured-properties/featured-properties';

@Component({
  selector: 'app-home',
  imports: [HeroSection, FeaturedProperties],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
