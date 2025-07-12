import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../../shared/interfaces/property';
import { PropertyImage } from '../../shared/interfaces/property-image';
import { PropertyDetailInfoService } from './services/property-main-info';
import { ImageGrid } from '../../features/image-grid/image-grid';
import { PropertyMainInfo } from '../../features/property-main-info/property-main-info';


@Component({
  selector: 'app-property-detail',
  imports: [PropertyMainInfo, ImageGrid],
  templateUrl: './property-detail.html',
  styleUrl: './property-detail.css'
})
export class PropertyDetail implements OnInit {

  property = signal<Property | null>(null);
  propertyImages = signal<PropertyImage[]>([]);
  mainImage = signal<string | null>(null);
  
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyDetailInfoService
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
        if (images.length > 0) {
          this.mainImage.set(images[0].imagePath);
        }
      },
      error: (err: any) => {
        console.error('Error loading property images:', err);
      }
    });
  }
}
