import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../shared/interfaces/category.interface';

@Component({
  standalone: true,
  selector: 'app-category-card',
  imports: [CommonModule],
  templateUrl: './category-card.html',
  styleUrl: './category-card.css'
})
export class CategoryCard {

  @Input() category!: ICategory;

  constructor(private router: Router) {
  }

  goToPropertyDetail() {
    const url = new URL(this.category.link, window.location.origin);
    this.router.navigate([url.pathname], { queryParams: Object.fromEntries(url.searchParams) });
  }
}
