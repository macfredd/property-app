import { Component, Input, signal } from '@angular/core';
import { IProperty } from '../../shared/interfaces/property';
import { IPropertyImage } from '../../shared/interfaces/property-image';

@Component({
  selector: 'app-property-info-panel',
  standalone: true,
  imports: [],
  templateUrl: './property-info-panel.html',
  styles: []
})
export class PropertyInfoPanel {
  @Input({ required: true }) property: IProperty | null = null;
  @Input() propertyImages: IPropertyImage[] = [];
} 