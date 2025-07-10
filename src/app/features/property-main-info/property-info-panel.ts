import { Component, Input, signal } from '@angular/core';
import { Property } from '../../shared/interfaces/property';
import { PropertyImage } from '../../shared/interfaces/property-image';

@Component({
  selector: 'app-property-info-panel',
  standalone: true,
  imports: [],
  templateUrl: './property-info-panel.html',
  styles: []
})
export class PropertyInfoPanel {
  @Input({ required: true }) property = signal<Property | null>(null);
  @Input() propertyImages = signal<PropertyImage[]>([]);
} 