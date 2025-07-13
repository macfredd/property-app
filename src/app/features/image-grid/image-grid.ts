import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IPropertyImage } from '../../shared/interfaces/property-image';

@Component({
  standalone: true,
  selector: 'app-image-grid',
  imports: [],
  templateUrl: './image-grid.html',
  styleUrl: './image-grid.css'
})
export class ImageGrid {

  @Input() propertyImages: IPropertyImage[] = [];
}
