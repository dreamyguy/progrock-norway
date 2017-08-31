import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ArtistPipe } from '../artist.pipe';
import { SafePipe } from '../app.module';

import { ArtistsComponent } from './artists.component';

describe('ArtistsComponent', () => {
  let component: ArtistsComponent;
  let fixture: ComponentFixture<ArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        ArtistsComponent,
        SafePipe,
        ArtistPipe
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
