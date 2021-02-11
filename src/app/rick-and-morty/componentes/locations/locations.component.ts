import { Component, OnInit } from '@angular/core';
import { LocationApiResponse } from '../../modelos/locationapiresponse';
import { LocationApiService } from '../../servicios/location-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  locationsCall: LocationApiResponse = new LocationApiResponse();
  pages!: number[];
  currentPage = 1;
  searchTerm = '';

  constructor(
    private locationsService: LocationApiService,
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

      this.getLocations(this.currentPage);
    });
  }

  getLocations(page = 1): void {
    this.locationsService
      .getEpisodes(page, this.searchTerm)
      .subscribe((locations) => {
        this.locationsCall = locations;
        this.fillInPageArray(locations.info.pages);
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
