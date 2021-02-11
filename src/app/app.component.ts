import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Rick-and-Morti-app';
  characterPage = 1;
  characterNameSearch = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.fromPage) {
        let cPageNum = Number(params.fromPage);
        if (!Number.isNaN(cPageNum)) {
          this.characterPage = cPageNum;
        }
      }
      if (params.nameSearch) {
        this.characterNameSearch = params.nameSearch;
      }
    });
  }
}
