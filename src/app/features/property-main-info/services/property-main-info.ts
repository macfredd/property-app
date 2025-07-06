import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../../../shared/interfaces/property';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertyMainInfoService {

  constructor(private http: HttpClient) { }

  /**
   * Get the property data from the API
   * @param id - The id of the property
   * @returns The property data
   */
  getPropertyData(id: number) {
    return this.http.get<Property[]>(`${environment.apiUrl}/properties?id=${id}`).pipe(
      map(properties => properties[0] || null)
    );
  }
}
