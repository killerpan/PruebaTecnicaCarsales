import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Location } from '../modelos/location';
import { LocationApiResponse } from '../modelos/locationapiresponse';

@Injectable({
  providedIn: 'root',
})
export class LocationApiService {
  constructor(private http: HttpClient) {}
  getEpisodes(page = 1, term = ''): Observable<LocationApiResponse> {
    return this.http.get<LocationApiResponse>(
      `${environment.locationsUrl}/?page=${page}${
        term === '' ? '' : '&name=' + term
      }`
    );
  }

  getEpisode(id: string): Observable<Location> {
    return this.http.get<Location>(`${environment.locationsUrl}/${id}`);
  }
}
