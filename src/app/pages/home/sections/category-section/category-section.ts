import { Component } from '@angular/core';
import { CategoryCard } from '../../../../features/category-card/category-card';

@Component({
  standalone: true,
  selector: 'app-category-section',
  imports: [CategoryCard],
  templateUrl: './category-section.html',
  styleUrl: './category-section.css'
})
export class CategorySection {
  categories = [
    {
      title: 'Casas en venta',
      primaryColor: '#1e40af', // blue-700
      secondaryColor: '#60a5fa', // blue-400
      link: '/search?type=BUY',
    },
    {
      title: 'Alquileres',
      primaryColor: '#059669', // emerald-600
      secondaryColor: '#34d399', // emerald-400
      link: '/search?type=RENT',
    },
    {
      title: 'Departamentos',
      primaryColor: '#7c3aed', // violet-600
      secondaryColor: '#c084fc', // purple-400
      link: '/search?category=apartment',
    },
    {
      title: 'Zonas exclusivas',
      primaryColor: '#dc2626', // red-600
      secondaryColor: '#f87171', // red-400
      link: '/search?zone=exclusive',
    },
  ];
}
