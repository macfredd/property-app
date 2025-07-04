import { Component } from '@angular/core';
import { HeroSection } from '../../features/hero-section/hero-section';
import { CategorySection } from '../../features/category-section/category-section';
import { FeaturedSection } from '../../features/featured-section/featured-section';
import { MapSection } from '../../features/map-section/map-section';
import { AddSection } from '../../features/add-section/add-section';


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
