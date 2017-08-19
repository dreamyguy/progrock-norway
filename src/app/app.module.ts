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
import { ArtistPipe } from './artist.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SafePipe,
    ArtistPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }