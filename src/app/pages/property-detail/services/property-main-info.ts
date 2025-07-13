import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { IProperty } from '../../../shared/interfaces/property';
import { IPropertyImage } from '../../../shared/interfaces/property-image';
import { IRating } from '../../../shared/interfaces/rating.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailInfoService {

  constructor(private http: HttpClient) { }

  /**
   * Get the property data from the API
   * @param id - The id of the property
   * @returns The property data
   */
  getPropertyData(id: number) {
    return this.http.get<IProperty[]>(`${environment.apiUrl}/properties?id=${id}`).pipe(
      map(properties => properties[0] || null)
    );
  }

  /**
   * Get the property images from the API
   * @param id - The id of the property
   * @returns The property images
   */
  getPropertyImages(id: number) {
    const url = `${environment.apiUrl}/propertyImages?propertyId=${id}`;
    return this.http.get<IPropertyImage[]>(url);
  }

  /**
   * Get the ratings for a property
   * @param propertyId - The id of the property
   * @returns An observable of ratings
   */
  getRatingsByProperty(propertyId: number): Observable<IRating[]> {
      const url = `${environment.apiUrl}/ratings?propertyId=${propertyId}`;
      return this.http.get<IRating[]>(url);
    }
}
