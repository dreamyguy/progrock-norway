import { Component, OnInit } from '@angular/core';
import { ARTISTS } from '../data/artists';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  bands = ARTISTS;
  searchArtist: any;

  constructor() { }

  ngOnInit() { }

}
