import { Component } from '@angular/core';

const BANDS: Band[] = [{
  id: 1,
  name: "Ruphus",
  artistId: "0f7lVIxa2peSrhZlF26ABt",
  albumId: "6NUeFjIFNZKIc9okI2o7y2"
}, {
  id: 2,
  name: "Pymlico",
  artistId: "5JJjg1uL3VhIH8qkvWuA60",
  albumId: "0WpyocruWWULk8tVfp4OJQ"
}, {
  id: 3,
  name: "Wallace Sidhrée",
  artistId: "0EiGue54P0MDdLnwCZ1nQp",
  albumId: "102vu2A0fZ7gcxSpB0Iwef"
}, {
  id: 4,
  name: "Wobbler",
  artistId: "00Uv0804nrBM2RxUBTkyHj",
  albumId: "1jSo3aFDhD8ddt3OnMOdgX"
}, {
  id: 5,
  name: "Gentle Knife",
  artistId: "4yeQFiXovGVyjjUKpTL9Fg",
  albumId: "2PTH8TGeqNWM8T6PjGyjQQ"
}, {
  id: 6,
  name: "Kerrs Pink",
  artistId: "0Gd917dNf0RSMMbf6K2MAU",
  albumId: "3zV4mt2ePrKPAChV7DjW3C"
}, {
  id: 7,
  name: "Høst",
  artistId: "7fjTLrnM9ZcxrV6a2MTcqG",
  albumId: "1UTkPJmTTR6ojPco9ifxFM"
}, {
  id: 8,
  name: "The Samuel Jackson Five",
  artistId: "6DvSYxOlsQk4YPDVX9CmT7",
  albumId: "1h0THqtizdiJNHMQVi7Br8"
}, {
  id: 9,
  name: "Bushman'S Revenge",
  artistId: "23ElmuKLosPuHchIPXuq5G",
  albumId: "30FmqjEFyyQDbfoSXZhPxb"
}, {
  id: 10,
  name: "Elephant9",
  artistId: "7fX6TkG03KYZv7jAaZKC5v",
  albumId: "3WjXMsWbZu3y1lm6KdjsTk"
}, {
  id: 11,
  name: "Knekklectric",
  artistId: "5FuLdmLZ9jQuymKPXF2X1S",
  albumId: "5Tjxt0bG3Dtv5Zi6UXZgfn"
}, {
  id: 12,
  name: "Krokofant",
  artistId: "23A1NMMpoNpJkSlq4GwJUy",
  albumId: "3Ko5ws2cXJM1yVj4nkDr19"
}, {
  id: 13,
  name: "Akasha",
  artistId: "2qGWvRZ9undS1PEp0vmQi5",
  albumId: "50YgSOobFaKkyOMekULe6b"
}, {
  id: 14,
  name: "Adventure",
  artistId: "32UctXTkymnqKbUnRNRRfB",
  albumId: "2YILQTmUHRuwfbkJzHdAhr"
}, {
  id: 15,
  name: "It's The End",
  artistId: "2X1da0cu0vjZkbA1c4P4hd",
  albumId: "5ba3xWrrJ2J2fCqk4tZSlN"
}];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Progressive Rock - Norway';
  subtitle = 'A list of established and upcoming Progressive Rock bands from Norway.';
  bands = BANDS;
}
export class Band {
  id: number;
  name: string;
  artistId: string;
  albumId: string;
}
