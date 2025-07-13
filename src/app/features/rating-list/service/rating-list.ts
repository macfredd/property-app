import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRating } from '../../../shared/interfaces/rating.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingList {

  constructor(private httpClient: HttpClient) { }

  getRatingsByProperty(propertyId: number): Observable<IRating[]> {
    const url = `${environment.apiUrl}/ratings?property=${propertyId}`;
    return this.httpClient.get<IRating[]>(url);
  }
}
