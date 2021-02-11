import { Component, OnInit } from '@angular/core';
import { EpisodeApiResponse } from '../../modelos/episoeapiresponse';
import { EpisodeApiService } from '../../servicios/episode-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css'],
})
export class EpisodeComponent implements OnInit {
  episodesCall: EpisodeApiResponse = new EpisodeApiResponse();
  pages!: number[];
  currentPage = 1;
  searchTerm = '';

  constructor(
    private episodesService: EpisodeApiService,
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

      this.getEpisodes(this.currentPage);
    });
  }

  getEpisodes(page = 1): void {
    this.episodesService
      .getEpisodes(page, this.searchTerm)
      .subscribe((episodes) => {
        this.episodesCall = episodes;
        this.fillInPageArray(episodes.info.pages);
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
