import { Component } from '@angular/core';
import artists from './data/artists.json';
import { ARTISTS } from './data/artists';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Progressive Rock Norway';
  subtitle = 'A list of established and upcoming Progressive Rock bands from Norway';
  bands = ARTISTS;
  searchArtist: any;
}
