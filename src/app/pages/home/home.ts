import { Component } from '@angular/core';
import { HeroSection } from '../../features/sections/hero-section/hero-section';
import { CategorySection } from '../../features/sections/category-section/category-section';
import { MapSection } from '../../features/sections/map-section/map-section';
import { AddSection } from '../../features/sections/add-section/add-section';
import { FeaturedSection } from '../../features/sections/featured-section/featured-section';


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
