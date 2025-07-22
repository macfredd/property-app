import { Component } from '@angular/core';
import { HeroSection } from './sections/hero-section/hero-section';
import { MapSection } from './sections/map-section/map-section';
import { AddSection } from './sections/add-section/add-section';
import { FeaturedSection } from './sections/featured-section/featured-section';
import { CategorySection } from './sections/category-section/category-section';



@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeroSection,
    FeaturedSection,
    CategorySection,
    MapSection,
    AddSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
