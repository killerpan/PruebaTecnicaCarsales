import { Component, OnInit } from '@angular/core';
import { Character } from '../../modelos/character';
import { ActivatedRoute } from '@angular/router';
import { CharacterApiService } from '../../servicios/character-api.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css'],
})
export class IndividualComponent implements OnInit {
  character!: Character;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharacterApiService
  ) {}

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get('id') || '';
    this.getCharacter(id);
  }

  getCharacter(id: string): void {
    this.charactersService.getCharacter(id).subscribe((character) => {
      this.character = character;
      console.log(character);
    });
  }
}