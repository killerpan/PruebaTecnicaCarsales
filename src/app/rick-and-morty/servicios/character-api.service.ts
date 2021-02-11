import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterApiResponse } from '../modelos/characterapiresponse';
import { environment } from './../../../environments/environment';
import { Character } from '../modelos/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterApiService {
  constructor(private http: HttpClient) {}

  getCharacters(page = 1, term = ''): Observable<CharacterApiResponse> {
    return this.http.get<CharacterApiResponse>(
      `${environment.charactersUrl}/?page=${page}${
        term === '' ? '' : '&name=' + term
      }`
    );
  }
  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(`${environment.charactersUrl}/${id}`);
  }
}
