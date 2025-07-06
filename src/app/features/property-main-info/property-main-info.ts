import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyMainInfoService } from './services/property-main-info';
import { Property } from '../../shared/interfaces/property';
import { CommonModule } from '@angular/common';
import { PropertyImage } from '../../shared/interfaces/property-image';

@Component({
  standalone: true,
  selector: 'app-property-main-info',
  imports: [CommonModule],
  templateUrl: './property-main-info.html',
  styleUrl: './property-main-info.css'
})
export class PropertyMainInfo implements OnInit {
  private route = inject(ActivatedRoute);
  private propertyService = inject(PropertyMainInfoService);

  // Signals
  property = signal<Property | null>(null);
  propertyImages = signal<PropertyImage[] | null>(null);

  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit() {
    this.loadPropertyData();
  }

  loadPropertyData() {
    this.loading.set(true);
    this.error.set(null);

    const propertyId = Number(this.route.snapshot.paramMap.get('id'));

    if (!propertyId) {
      this.error.set('ID de propiedad no válido');
      this.loading.set(false);
      return;
    }

    // Cargar propiedad e imágenes en paralelo
    this.loadProperty(propertyId);
    this.loadPropertyImages(propertyId);
  }

  loadProperty(propertyId: number) {
    this.propertyService.getPropertyData(propertyId).subscribe({
      next: (property) => {
        console.log(property);
        this.property.set(property);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar la propiedad');
        this.loading.set(false);
        console.error('Error loading property:', err);
      }
    });
  }

  loadPropertyImages(propertyId: number) {
    this.propertyService.getPropertyImages(propertyId).subscribe({
      next: (images) => {
        this.propertyImages.set(images);
      },
      error: (err) => {
        console.error('Error loading property images:', err);
      }
    });
  }
}
