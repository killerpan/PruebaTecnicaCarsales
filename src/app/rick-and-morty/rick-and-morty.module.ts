import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeComponent } from './componentes/episode/episode.component';
import { CharactersComponent } from './componentes/characters/characters.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { IndividualComponent } from './componentes/individual/individual.component';
import { IndividualEpisodeComponent } from './componentes/individual-episode/individual-episode.component';
import { LocationsComponent } from './componentes/locations/locations.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  declarations: [
    EpisodeComponent,
    CharactersComponent,
    IndividualComponent,
    IndividualEpisodeComponent,
    LocationsComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule,FontAwesomeModule],
  exports: [EpisodeComponent, CharactersComponent],
})
export class RickAndMortyModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSearch);
  }
}
