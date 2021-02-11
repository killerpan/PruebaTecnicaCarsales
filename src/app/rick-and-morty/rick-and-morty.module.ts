import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeComponent } from './componentes/episode/episode.component';
import { CharactersComponent } from './componentes/characters/characters.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { IndividualComponent } from './componentes/individual/individual.component';
import { IndividualEpisodeComponent } from './componentes/individual-episode/individual-episode.component';
import { LocationsComponent } from './componentes/locations/locations.component';

@NgModule({
  declarations: [
    EpisodeComponent,
    CharactersComponent,
    IndividualComponent,
    IndividualEpisodeComponent,
    LocationsComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [EpisodeComponent, CharactersComponent],
})
export class RickAndMortyModule {}
