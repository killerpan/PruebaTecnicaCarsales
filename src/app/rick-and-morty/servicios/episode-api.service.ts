import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { EpisodeApiResponse } from '../modelos/episoeapiresponse';
import { Episode } from '../modelos/episode';

@Injectable({
  providedIn: 'root',
})
export class EpisodeApiService {
  constructor(private http: HttpClient) {}
  getEpisodes(page = 1, term = ''): Observable<EpisodeApiResponse> {
    return this.http.get<EpisodeApiResponse>(
      `${environment.episodesUrl}/?page=${page}${
        term === '' ? '' : '&name=' + term
      }`
    );
  }

  getEpisode(id: string): Observable<Episode> {
    return this.http.get<Episode>(`${environment.episodesUrl}/${id}`);
  }
}
