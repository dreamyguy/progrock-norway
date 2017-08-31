import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ArtistsComponent } from './artists/artists.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ArtistPipe } from './artist.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    ArtistsComponent,
    PlaylistComponent,
    SafePipe,
    ArtistPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
