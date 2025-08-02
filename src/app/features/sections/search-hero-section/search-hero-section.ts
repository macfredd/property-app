import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-search-hero-section',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-hero-section.html',
  styleUrl: './search-hero-section.css'
})
export class SearchHeroSection {

  imageUrl: string = '';

  tiposPropiedad = [
    { id: 1, name: 'Casa' },
    { id: 2, name: 'Apartamento' },
    { id: 3, name: 'Terreno' },
    { id: 4, name: 'Finca' }
  ];

  filtros = {
    typeId: null as number | null,
    priceMin: 0,
    priceMax: 1000000,
    builtAreaMin: 0,
    builtAreaMax: 10000,
    rooms: 1,
    bathrooms: 1,
    wifi: null
  };

  private images: string[] = [
    './assets/images/site/main-01.jpg',
    './assets/images/site/main-02.jpg',
    './assets/images/site/main-03.webp',
  ];

  constructor(private router: Router) {
    const index = Math.floor(Math.random()* this.images.length);
    this.imageUrl = this.images[index];
  }

  onPriceMinChange(event: any) {
    const value = parseInt(event.target.value);
    if (value >= this.filtros.priceMax) {
      this.filtros.priceMin = this.filtros.priceMax - 10000;
    }
  }

  onPriceMaxChange(event: any) {
    const value = parseInt(event.target.value);
    if (value <= this.filtros.priceMin) {
      this.filtros.priceMax = this.filtros.priceMin + 10000;
    }
  }

  selectRooms(num: number) {
    this.filtros.rooms = num;
  }

  selectBathrooms(num: number) {
    this.filtros.bathrooms = num;
  }

  selectPropertyType(typeId: number) {
    this.filtros.typeId = typeId;
  }

  onBuiltAreaMinChange(event: any) {
    const value = parseInt(event.target.value);
    if (value >= this.filtros.builtAreaMax) {
      this.filtros.builtAreaMin = this.filtros.builtAreaMax - 50;
    }
  }

  onBuiltAreaMaxChange(event: any) {
    const value = parseInt(event.target.value);
    if (value <= this.filtros.builtAreaMin) {
      this.filtros.builtAreaMax = this.filtros.builtAreaMin + 50;
    }
  }

  buscarPropiedades() {
    this.router.navigate(['/buscar-propiedades'], {
      queryParams: this.filtros
    });
  }
} 