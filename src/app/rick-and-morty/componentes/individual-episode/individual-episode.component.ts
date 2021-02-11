import { Component, OnInit } from '@angular/core';
import { Episode } from '../../modelos/episode';
import { ActivatedRoute } from '@angular/router';
import { EpisodeApiService } from '../../servicios/episode-api.service';

@Component({
  selector: 'app-individual-episode',
  templateUrl: './individual-episode.component.html',
  styleUrls: ['./individual-episode.component.css'],
})
export class IndividualEpisodeComponent implements OnInit {
  episode!: Episode;

  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeApiService
  ) {}

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get('id') || '';
    this.getEpisode(id);
  }

  getEpisode(id: string): void {
    this.episodeService.getEpisode(id).subscribe((episode) => {
      this.episode = episode;
    });
  }
}