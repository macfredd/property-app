import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICardProperty } from '../../shared/interfaces/card-property.interface';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-property-card',
  imports: [CommonModule],
  templateUrl: './property-card.html',
  styleUrl: './property-card.css'
})

export class PropertyCard {
  @Input() property!: ICardProperty;

  constructor(private router: Router) {
  }

  goToPropertyDetail() {
    this.router.navigate(['/property', this.property.id]);
  }
}
