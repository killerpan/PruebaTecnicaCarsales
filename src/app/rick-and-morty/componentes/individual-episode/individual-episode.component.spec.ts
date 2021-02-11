import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualEpisodeComponent } from './individual-episode.component';

describe('IndividualEpisodeComponent', () => {
  let component: IndividualEpisodeComponent;
  let fixture: ComponentFixture<IndividualEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualEpisodeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});