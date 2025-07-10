import { Component } from '@angular/core';
import { PropertyMainInfo } from '../../features/property-main-info/property-main-info';
import { ImageGrid } from '../../features/image-grid/image-grid';


@Component({
  selector: 'app-property-detail',
  imports: [PropertyMainInfo, ImageGrid],
  templateUrl: './property-detail.html',
  styleUrl: './property-detail.css'
})
export class PropertyDetail {

}
