import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Property } from '../../shared/interfaces/property';
import { PropertyImage } from '../../shared/interfaces/property-image';
import { PropertyMainInfoService } from './services/property-main-info';
import { PropertyInfoPanelComponent } from './property-info-panel';

@Component({
  selector: 'app-property-main-info',
  standalone: true,
  imports: [CommonModule, PropertyInfoPanelComponent],
  templateUrl: './property-main-info.html',
  styleUrls: ['./property-main-info.css']
})
export class PropertyMainInfoComponent implements OnInit {
  property = signal<Property | null>(null);
  propertyImages = signal<PropertyImage[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyMainInfoService
  ) {}

  ngOnInit(): void {
    this.loadPropertyData();
  }

  loadPropertyData(): void {
    this.loading.set(true);
    this.error.set(null);

    const propertyId = this.route.snapshot.paramMap.get('id');
    if (!propertyId) {
      this.error.set('ID de propiedad no válido');
      this.loading.set(false);
      return;
    }

    const id = Number(propertyId);
    this.propertyService.getPropertyData(id).subscribe({
      next: (property: Property | null) => {
        this.property.set(property);
        if (property) {
          this.loadPropertyImages(id);
        }
        this.loading.set(false);
      },
      error: (err: any) => {
        this.error.set('Error al cargar la propiedad: ' + err.message);
        this.loading.set(false);
      }
    });
  }

  private loadPropertyImages(propertyId: number): void {
    this.propertyService.getPropertyImages(propertyId).subscribe({
      next: (images: PropertyImage[]) => {
        this.propertyImages.set(images);
      },
      error: (err: any) => {
        console.error('Error loading property images:', err);
      }
    });
  }
}
