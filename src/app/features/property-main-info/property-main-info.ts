import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyInfoPanel } from './property-info-panel';
import { IProperty } from '../../shared/interfaces/property';
import { IPropertyImage } from '../../shared/interfaces/property-image';

@Component({
  selector: 'app-property-main-info',
  standalone: true,
  imports: [CommonModule, PropertyInfoPanel],
  templateUrl: './property-main-info.html',
  styleUrls: ['./property-main-info.css']
})
export class PropertyMainInfo {
   
  @Input() property: IProperty | null = null;
  @Input() mainImage: string | null = null;
  @Input() propertyImages: IPropertyImage[] = [];
}
