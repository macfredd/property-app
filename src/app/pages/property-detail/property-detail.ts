import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from '../../shared/interfaces/property';
import { IPropertyImage } from '../../shared/interfaces/property-image';
import { PropertyDetailInfoService } from './services/property-main-info';
import { ImageGrid } from '../../features/image-grid/image-grid';
import { PropertyMainInfo } from '../../features/property-main-info/property-main-info';
import { IRating } from '../../shared/interfaces/rating.interface';
import { RatingList } from '../../features/rating-list/rating-list';


@Component({
  selector: 'app-property-detail',
  imports: [
    PropertyMainInfo, 
    ImageGrid,
    RatingList],
  templateUrl: './property-detail.html',
  styleUrl: './property-detail.css'
})
export class PropertyDetail implements OnInit {

  property = signal<IProperty | null>(null);
  propertyImages = signal<IPropertyImage[]>([]);
  mainImage = signal<string | null>(null);
  ratings = signal<IRating[]>([]);
  
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyDetailInfoService
  ) {}

  ngOnInit(): void {
    this.loadPropertyData();
  }

  /**
   * Load property data including images and ratings
   */
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
      next: (property: IProperty | null) => {
        this.property.set(property);
        if (property) {
          this.loadPropertyImages(id);
          this.loadRatings(id);
        }
        this.loading.set(false);
      },
      error: (err: any) => {
        this.error.set('Error al cargar la propiedad: ' + err.message);
        this.loading.set(false);
      }
    });
  }

  /**
   * Load property images and set the main image
   * @param propertyId - The ID of the property
   */
  private loadPropertyImages(propertyId: number): void {
    this.propertyService.getPropertyImages(propertyId).subscribe({
      next: (images: IPropertyImage[]) => {
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

  /**
   * Load ratings for the property
   * @param propertyId - The ID of the property
   */
  private loadRatings(propertyId: number): void {
    this.propertyService.getRatingsByProperty(propertyId).subscribe({
      next: (ratings: IRating[]) => {
        this.ratings.set(ratings);
      },
      error: (err: any) => {
        console.error('Error loading ratings:', err);
      }
    });
  }
}
