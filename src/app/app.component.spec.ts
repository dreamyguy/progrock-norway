import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ArtistPipe } from './artist.pipe';
import { SafePipe } from './app.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        AboutComponent,
        PlaylistComponent,
        SafePipe,
        ArtistPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Progressive Rock Norway'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Progressive Rock Norway');
  }));

  it('should render the application placeholder', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').className).toContain('content');
  }));
});
