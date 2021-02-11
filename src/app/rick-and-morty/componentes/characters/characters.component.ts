import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterApiResponse } from '../../modelos/characterapiresponse';
import { CharacterApiService } from '../../servicios/character-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characterCall!: CharacterApiResponse;
  pages!: number[];
  currentPage = 1;
  searchTerm = '';

  constructor(
    private charactersService: CharacterApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.fromPage) {
        this.currentPage = Number(params.fromPage);
        if (Number.isNaN(this.currentPage)) {
          this.currentPage = 1;
        }
      }
      if (params.nameSearch) {
        this.searchTerm = params.nameSearch;
      }

      this.getCharacters(this.currentPage);
    });
  }

  getCharacters(page = 1): void {
    this.charactersService
      .getCharacters(page, this.searchTerm)
      .subscribe((characters) => {
        this.characterCall = characters;
        this.fillInPageArray(characters.info.pages);
        this.currentPage = page;
      });
  }

  fillInPageArray(total: number): void {
    this.pages = [] as number[];

    for (var counter: number = 1; counter <= total; counter++) {
      this.pages.push(counter);
    }
  }
}
