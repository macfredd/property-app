import { Component } from '@angular/core';
import { PropertyCard } from '../../../../features/property-card/property-card';
import { ICardProperty } from '../../../../shared/interfaces/card-property.interface';

@Component({
  standalone: true,
  selector: 'app-featured-section',
  imports: [PropertyCard],
  templateUrl: './featured-section.html',
  styleUrl: './featured-section.css'
})
export class FeaturedSection {

  properties: ICardProperty[] = [
    { id: 1, title: "Casa Olguín", price: 190000, imageUrl: "/assets/images/properties/Casa-Olguin-2.webp" },
    { id: 2, title: "Casa para ver al Cielo", price: 175000, imageUrl: "/assets/images/properties/Casa-Cielo-front.webp" },
    { id: 3, title: "Casa Palermo", price: 210000, imageUrl: "/assets/images/properties/CasaPalermo-front.jpg" },
    { id: 4, title: "Natura", price: 30000, imageUrl: "/assets/images/properties/CasaNatura-front.webp" },
    { id: 5, title: "Punto Sur", price: 125000, imageUrl: "/assets/images/properties/CasaSur-front.jpg" },
    { id: 6, title: "La Cuenva", price: 280000, imageUrl: "/assets/images/properties/LaCueva-front.webp" },
    { id: 7, title: "Bonsai", price: 235000, imageUrl: "/assets/images/properties/Bonsai-front.webp" },
    { id: 8, title: "La Piedad", price: 168000, imageUrl: "/assets/images/properties/LaPiedad-front.webp" },
  ];
}
