import { Component } from '@angular/core';
import { SearchResults } from '../../features/search-results/search-results';
import { SearchHeroSection } from '../../features/sections/search-hero-section/search-hero-section';

@Component({
  selector: 'app-search',
  imports: [SearchHeroSection, SearchResults],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

}
