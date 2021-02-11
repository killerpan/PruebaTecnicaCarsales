import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './rick-and-morty/componentes/characters/characters.component';
import { EpisodeComponent } from './rick-and-morty/componentes/episode/episode.component';
import { IndividualComponent } from './rick-and-morty/componentes/individual/individual.component';
import { IndividualEpisodeComponent } from './rick-and-morty/componentes/individual-episode/individual-episode.component';
import { LocationsComponent } from './rick-and-morty/componentes/locations/locations.component';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'episodes', component: EpisodeComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'character/:id', component: IndividualComponent },
  { path: 'episode/:id', component: IndividualEpisodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
