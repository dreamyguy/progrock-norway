import { Component } from '@angular/core';

const BANDS: Band[] = [{
  id: 1,
  name: "Pymlico",
  artistId: "5JJjg1uL3VhIH8qkvWuA60",
  fbId: "Pymlico",
  status: true,
  onPlaylist: true,
  listeners: 192
}, {
  id: 2,
  name: "Wallace Sidhrée",
  artistId: "0EiGue54P0MDdLnwCZ1nQp",
  fbId: "sidhree",
  status: true,
  onPlaylist: true,
  listeners: 18
}, {
  id: 3,
  name: "Wobbler",
  artistId: "00Uv0804nrBM2RxUBTkyHj",
  fbId: "wobblerofficial",
  status: true,
  onPlaylist: true,
  listeners: 1012
}, {
  id: 4,
  name: "Gentle Knife",
  artistId: "4yeQFiXovGVyjjUKpTL9Fg",
  fbId: "gentleknife",
  status: true,
  onPlaylist: true,
  listeners: 527
}, {
  id: 5,
  name: "Motorpsycho",
  artistId: "2bNIAjyL3hFCuQBQqhPN4T",
  fbId: "",
  status: true,
  onPlaylist: true,
  listeners: 27586
}, {
  id: 6,
  name: "Kerrs Pink",
  artistId: "0Gd917dNf0RSMMbf6K2MAU",
  fbId: "kerrspinkofficial",
  status: true,
  onPlaylist: true,
  listeners: 147
}, {
  id: 7,
  name: "Tusmørke",
  artistId: "5JdO8K76wH3sK5J9v3Iyah",
  fbId: "Tusmorke",
  status: true,
  onPlaylist: true,
  listeners: 2895
}, {
  id: 8,
  name: "Tenderton",
  artistId: "4pX9ElBqHulcUh35oAuBOc",
  fbId: "tendertonband",
  status: true,
  onPlaylist: true,
  listeners: 7
}, {
  id: 9,
  name: "White Willow",
  artistId: "62f9LejTohfxGWhMP00ZrS",
  fbId: "whitewillowband",
  status: true,
  onPlaylist: true,
  listeners: 1111
}, {
  id: 10,
  name: "Pluto And the Planets",
  artistId: "4GGwyrsS0vB4iM5hMa6MMw",
  fbId: "PLUTO-AND-THE-PLANETS-19611404996",
  status: true,
  onPlaylist: true,
  listeners: 24
}, {
  id: 11,
  name: "Pixie Ninja",
  artistId: "4vEaHdiNk8sisbw3qlOBw9",
  fbId: "pixieninjaband",
  status: true,
  onPlaylist: true,
  listeners: 221
}, {
  id: 12,
  name: "Soup",
  artistId: "3yb7jKqLaO7FI7MzQLVysm",
  fbId: "soupsound",
  status: true,
  onPlaylist: true,
  listeners: 4328
}, {
  id: 13,
  name: "ProgAtom",
  artistId: "19yLPM8u9mkl3fP8Fyo6wC",
  fbId: "progatom",
  status: true,
  onPlaylist: true,
  listeners: 14
}, {
  id: 14,
  name: "Magic pie",
  artistId: "0ABvgllZiW792ERHXuJlGz",
  fbId: "MagicPieOfficial",
  status: true,
  onPlaylist: true,
  listeners: 2190
}, {
  id: 15,
  name: "Annot Rhül",
  artistId: "2KAyxJ1rB0E2VVbQYmSIfb",
  fbId: "annotrhul",
  status: true,
  onPlaylist: true,
  listeners: 36
}, {
  id: 16,
  name: "Arabs in aspic",
  artistId: "1ELktqazsduNTO0cvCc3jG",
  fbId: "arabsinaspic",
  status: true,
  onPlaylist: true,
  listeners: 304
}, {
  id: 17,
  name: "Suburban Savages",
  artistId: "3OSklNkdsa2o0BFFb8Raej",
  fbId: "SuburbanSavages",
  status: true,
  onPlaylist: true,
  listeners: 68
}, {
  id: 18,
  name: "Knekklectric",
  artistId: "5FuLdmLZ9jQuymKPXF2X1S",
  fbId: "knekklectric",
  status: true,
  onPlaylist: true,
  listeners: 250
}, {
  id: 19,
  name: "Bjørn Riis Band",
  artistId: "0itkMtdd5OVeG2FFDE7J6z",
  fbId: "BjornRiisGuitarPage",
  status: true,
  onPlaylist: true,
  listeners: 6439
}, {
  id: 20,
  name: "Jono el grande",
  artistId: "5anYQcPEvvSc4zFfO2ZoOC",
  fbId: "",
  status: true,
  onPlaylist: true,
  listeners: 153
}, {
  id: 21,
  name: "Farmers Market",
  artistId: "5NVnpmSzeucVtzvugmlYqT",
  fbId: "",
  status: true,
  onPlaylist: true,
  listeners: 1626
}, {
  id: 22,
  name: "Weserbergland",
  artistId: "0voGgCtm0p027RhxjokAcg",
  fbId: "weserberglandband",
  status: true,
  onPlaylist: true,
  listeners: 149
}, {
  id: 23,
  name: "Bez Taktu",
  artistId: "0X0KoXOatGXQCXN59lUSTb",
  fbId: "BezTaktu",
  status: true,
  onPlaylist: true,
  listeners: 31
}, {
  id: 24,
  name: "Seven Impale",
  artistId: "56h6oZFC4GnKgMA3WQtj35",
  fbId: "sevenimpale",
  status: true,
  onPlaylist: true,
  listeners: 655
}, {
  id: 25,
  name: "Elephant Plaza",
  artistId: "7yUyMUhLmYaqbKY07j5BY2",
  fbId: "elephantplaza",
  status: true,
  onPlaylist: true,
  listeners: 86
}, {
  id: 26,
  name: "Umpfel",
  artistId: "0aUEDr54nJBBanpzDTMYfd",
  fbId: "umpfel",
  status: true,
  onPlaylist: true,
  listeners: 235
}, {
  id: 27,
  name: "The Brimstone Solar Radiation Band",
  artistId: "5IXiTe1pqWhapwnHSXozot",
  fbId: "The-Brimstone-Solar-Radiation-Band-6553618902",
  status: true,
  onPlaylist: true,
  listeners: 358
}, {
  id: 28,
  name: "Glutton",
  artistId: "2SPyFYBRgRoTnOXilDeSXj",
  fbId: "gluttonmusic",
  status: true,
  onPlaylist: true,
  listeners: 38
}, {
  id: 29,
  name: "Leprous",
  artistId: "4lgrzShsg2FLA89UM2fdO5",
  fbId: "leprousband",
  status: true,
  onPlaylist: true,
  listeners: 111304
}, {
  id: 30,
  name: "1099",
  artistId: "12zVnfDLMYNY4LlE3rBYrM",
  fbId: "",
  status: true,
  onPlaylist: true,
  listeners: 131
}, {
  id: 31,
  name: "The Samuel Jackson Five",
  artistId: "6DvSYxOlsQk4YPDVX9CmT7",
  fbId: "thesamueljacksonfive",
  status: true,
  onPlaylist: true,
  listeners: 2393
}, {
  id: 32,
  name: "Bushman'S Revenge",
  artistId: "23ElmuKLosPuHchIPXuq5G",
  fbId: "Bushmans-Revenge-187627191297638",
  status: true,
  onPlaylist: true,
  listeners: 789
}, {
  id: 33,
  name: "Elephant9",
  artistId: "7fX6TkG03KYZv7jAaZKC5v",
  fbId: "elephant9music",
  status: true,
  onPlaylist: true,
  listeners: 742
}, {
  id: 34,
  name: "Krokofant",
  artistId: "23A1NMMpoNpJkSlq4GwJUy",
  fbId: "krokofantmusic",
  status: true,
  onPlaylist: true,
  listeners: 492
}, {
  id: 35,
  name: "Hedvig Mollestad Trio",
  artistId: "33Ynrn4NZsANMBJsFFqB7Y",
  fbId: "HedvigMollestadTrio",
  status: true,
  onPlaylist: true,
  listeners: 1559
}, {
  id: 36,
  name: "Panzerpappa",
  artistId: "0lGGauQMSjmuLazY2bUHnm",
  fbId: "Panzerpappa-112379508814650",
  status: true,
  onPlaylist: true,
  listeners: 135
}, {
  id: 37,
  name: "Airbag",
  artistId: "0gTqi1zdqD9s6islG2wLKC",
  fbId: "airbagsound",
  status: true,
  onPlaylist: true,
  listeners: 9111
}, {
  id: 38,
  name: "Kaukasus",
  artistId: "0Vv2qh9Y97inB6A7IFCNSN",
  fbId: "KaukasusBand",
  status: true,
  onPlaylist: true,
  listeners: 15
}, {
  id: 39,
  name: "Procosmian Fannyfiddlers",
  artistId: "45M2IUBxM7WgEi8T8ZuMFy",
  fbId: "Procosmian-Fannyfiddlers-290427701038809",
  status: true,
  onPlaylist: true,
  listeners: 5
}, {
  id: 40,
  name: "Trojka",
  artistId: "2EKOcTjcnzeH0Rd3PPoH4m",
  fbId: "TrojkaBergen",
  status: true,
  onPlaylist: true,
  listeners: 123
}, {
  id: 41,
  name: "Rendezvous Point",
  artistId: "0AhnRzNnHI2Yhx9d00H5Cp",
  fbId: "RendezvousPointOfficial",
  status: true,
  onPlaylist: true,
  listeners: 8108
}, {
  id: 42,
  name: "D'accord",
  artistId: "2X2bWXtWvoXppjpTRQrxqE",
  fbId: "officialdaccord",
  status: true,
  onPlaylist: true,
  listeners: 124
}, {
  id: 43,
  name: "Adventure",
  artistId: "32UctXTkymnqKbUnRNRRfB",
  fbId: "",
  status: true,
  onPlaylist: true,
  listeners: 19
}, {
  id: 44,
  name: "Høst",
  artistId: "7fjTLrnM9ZcxrV6a2MTcqG",
  fbId: "HOSTNORWAY",
  status: true,
  onPlaylist: true,
  listeners: 524
}, {
  id: 45,
  name: "Ruphus",
  artistId: "0f7lVIxa2peSrhZlF26ABt",
  fbId: "thebandruphus",
  status: false,
  onPlaylist: true,
  listeners: 654
}, {
  id: 46,
  name: "DejaVu",
  artistId: "1xLZMr0J6UZYw5wI20hNT8",
  fbId: "",
  status: true,
  onPlaylist: true,
  listeners: 0
}, {
  id: 47,
  name: "Nordagust",
  artistId: "026DSD4ZP6332fMZ3fYiON",
  fbId: "Nordagust-152203358171757",
  status: true,
  onPlaylist: true,
  listeners: 36
}, {
  id: 48,
  name: "Popol Ace",
  artistId: "56X1tHiY56H9hjdHRxel2u",
  fbId: "",
  status: false,
  onPlaylist: true,
  listeners: 1917
}, {
  id: 49,
  name: "Akasha",
  artistId: "2qGWvRZ9undS1PEp0vmQi5",
  fbId: "",
  status: false,
  onPlaylist: true,
  listeners: 0
}, {
  id: 50,
  name: "It's The End",
  artistId: "2X1da0cu0vjZkbA1c4P4hd",
  fbId: "",
  status: false,
  onPlaylist: true,
  listeners: 29
}, {
  id: 51,
  name: "Oak",
  artistId: "4rrrO8ECAaFRu685uh2XPn",
  fbId: "oakinoslo",
  status: true,
  onPlaylist: true,
  listeners: 163
}, {
  id: 52,
  name: "Aunt Mary",
  artistId: "2IZ7AXDqIna8IbVPom5cbV",
  fbId: "auntmarytheband",
  status: true,
  onPlaylist: true,
  listeners: 1655
}, {
  id: 53,
  name: "Shaman Elephant",
  artistId: "1bA1j1Wd0eDKqbsxON4a7d",
  fbId: "shamanelephant",
  status: true,
  onPlaylist: true,
  listeners: 389
}, {
  id: 54,
  name: "Tangle Edge",
  artistId: "0QWWgOLiHu17nLFzTIBM86",
  fbId: "Tangle-Edge-134566096658445",
  status: true,
  onPlaylist: true,
  listeners: 17
}, {
  id: 55,
  name: "Seid",
  artistId: "1szxWhgzTXIkG7FJ79gHzx",
  fbId: "seidrock",
  status: true,
  onPlaylist: true,
  listeners: 1913
}, {
  id: 56,
  name: "Synkoke",
  artistId: "02MC05E7L2Xl3cVUnTPd2d",
  fbId: "synkoke",
  status: true,
  onPlaylist: true,
  listeners: 33
}, {
  id: 57,
  name: "Fatal fusion",
  artistId: "1M99Oc67ZFOzNKyGofRYEb",
  fbId: "Fatal-Fusion-49222763785",
  status: true,
  onPlaylist: true,
  listeners: 392
}, {
  id: 58,
  name: "Prudence",
  artistId: "46Yft7aKaVVOyuSvu2Fyka",
  fbId: "",
  status: false,
  onPlaylist: true,
  listeners: 0
}, {
  id: 59,
  name: "Junipher Greene",
  artistId: "66XeEqwvu77N79QtyvBqO3",
  fbId: "juniphergreenejubilee",
  status: false,
  onPlaylist: true,
  listeners: 377
}, {
  id: 60,
  name: "Last Ember",
  artistId: "1LrUu1hZUl27WJkDEqi3ES",
  fbId: "LastEmberband",
  status: true,
  onPlaylist: true,
  listeners: 34
}, {
  id: 61,
  name: "Ossicles",
  artistId: "5YIOI1tcgj46yC7GgDHv24",
  fbId: "Ossicles",
  status: true,
  onPlaylist: true,
  listeners: 74
}, {
  id: 62,
  name: "Gazpacho",
  artistId: "1Joel9mDWSEZfHPE2KooW3",
  fbId: "Gazpacho.Official.BandPage",
  status: true,
  onPlaylist: true,
  listeners: 26179
}, {
  id: 63,
  name: "Oriental Sunshine",
  artistId: "5YD1psyl46YI0MjK61g9Xg",
  fbId: "",
  status: true,
  onPlaylist: true,
  listeners: 206
}, {
  id: 64,
  name: "The Windmill",
  artistId: "5iFzNxkNt66KeiLWdE7H05",
  fbId: "The-Windmill-142175499160527",
  status: true,
  onPlaylist: true,
  listeners: 97
}, {
  id: 65,
  name: "Actionfredag",
  artistId: "4guh2PzBCv6hCLsb1QXkox",
  fbId: "actionfredag",
  status: true,
  onPlaylist: true,
  listeners: 11
}, {
  id: 66,
  name: "Det Skandaløse Orkester",
  artistId: "3QitecJCQGP9Nj7MIDkCZg",
  fbId: "skandalose",
  status: true,
  onPlaylist: true,
  listeners: 62
}, {
  id: 67,
  name: "Infringement",
  artistId: "5lAdM5NnorfqXYZYYr38Pd",
  fbId: "infringementband",
  status: true,
  onPlaylist: true,
  listeners: 43
}, {
  id: 68,
  name: "Kongle",
  artistId: "6B6CU7w7klU9auHRkAfjmu",
  fbId: "konglebergen",
  status: true,
  onPlaylist: true,
  listeners: 65
}, {
  id: 69,
  name: "Major Parkinson",
  artistId: "5baLALm4KxY0I4z4OjumiZ",
  fbId: "majorparkinson",
  status: true,
  onPlaylist: true,
  listeners: 11819
}, {
  id: 70,
  name: "Kornmo",
  artistId: "0XtoxFrlri65HA8shgnNWy",
  fbId: "ildogvann",
  status: true,
  onPlaylist: true,
  listeners: 4
}, {
  id: 71,
  name: "Needlepoint",
  artistId: "3GBPzzHwfT7iXD8u7iZvue",
  fbId: "needlepoint.official",
  status: true,
  onPlaylist: true,
  listeners: 277
}, {
  id: 72,
  name: "Holon",
  artistId: "5EGRA2ywLUVNgIyhGmRu2Q",
  fbId: "holon.official",
  status: true,
  onPlaylist: true,
  listeners: 0
}, {
  id: 73,
  name: "Kambodsja",
  artistId: "1Vm8N0eT01j12THcY5tf8E",
  fbId: "kambodsja",
  status: true,
  onPlaylist: true,
  listeners: 80
}, {
  id: 74,
  name: "Lucifer Was",
  artistId: "1LrUu1hZUl27WJkDEqi3ES",
  fbId: "Lucifer-Was-357893044376618",
  status: true,
  onPlaylist: true,
  listeners: 265
}, {
  id: 75,
  name: "Matterhorn",
  artistId: "5c4VNxynfxoOk4i5PPhxUI",
  fbId: "Matterhorn72Music",
  status: true,
  onPlaylist: true,
  listeners: 20
}, {
  id: 76,
  name: "Rhys Marsh",
  artistId: "6sAKiL3oRGFSTjSJH8zqzi",
  fbId: "rhysmarshmusic",
  status: true,
  onPlaylist: true,
  listeners: 14
}, {
  id: 77,
  name: "Now We’ve Got Members",
  artistId: "2gqsPSVssvy91LHdo070k7",
  fbId: "NowWeveGotMembers",
  status: true,
  onPlaylist: true,
  listeners: 39
}, {
  id: 78,
  name: "Shamblemaths",
  artistId: "3wnsekzvTEDVdgtWFmiPiZ",
  fbId: "shamblemaths",
  status: true,
  onPlaylist: true,
  listeners: 74
}, {
  id: 79,
  name: "Terramater",
  artistId: "6CMBH89qR6KmTfwwRRFlBJ",
  fbId: "Terramater-203111543040208",
  status: true,
  onPlaylist: true,
  listeners: 20
}, {
  id: 80,
  name: "Thule",
  artistId: "7rSWPijuc6fv6lGAno5trd",
  fbId: "Thule-139490042768792",
  status: true,
  onPlaylist: true,
  listeners: 0
}, {
  id: 81,
  name: "The Opium Cartel",
  artistId: "5bDDhDrwBbf8iXjJa1E8Fd",
  fbId: "theopiumcartel",
  status: true,
  onPlaylist: true,
  listeners: 51
}, {
  id: 82,
  name: "Professor Tip Top",
  artistId: "4Xp9pfjXi7jFlGmcoeUYJz",
  fbId: "Professor-Tip-Top-282706708456217",
  status: true,
  onPlaylist: true,
  listeners: 32
}, {
  id: 83,
  name: "Alwanzatar",
  artistId: "",
  fbId: "alwanzatar",
  status: true,
  onPlaylist: false,
  listeners: 0
}, {
  id: 84,
  name: "Andre Drage Group",
  artistId: "",
  fbId: "andredragegroup",
  status: true,
  onPlaylist: false,
  listeners: 0
}, {
  id: 85,
  name: "Fraction distraction",
  artistId: "",
  fbId: "fractiondistraction",
  status: true,
  onPlaylist: false,
  listeners: 0
}, {
  id: 86,
  name: "Ingelrii",
  artistId: "",
  fbId: "ingelrii",
  status: true,
  onPlaylist: false,
  listeners: 0
}, {
  id: 87,
  name: "Jordsjø",
  artistId: "",
  fbId: "jordsjoe",
  status: true,
  onPlaylist: false,
  listeners: 0
}, {
  id: 88,
  name: "Swifan Eolh",
  artistId: "",
  fbId: "mudrasiddhi",
  status: true,
  onPlaylist: false,
  listeners: 0
}, {
  id: 89,
  name: "The Chronicles of Father Robin",
  artistId: "",
  fbId: "The-Chronicles-of-Father-Robin-109306549137345",
  status: true,
  onPlaylist: false,
  listeners: 0
}, {
  id: 80,
  name: "When Mary",
  artistId: "",
  fbId: "whenmary",
  status: true,
  onPlaylist: false,
  listeners: 0
}];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Progressive Rock - Norway';
  subtitle = 'A list of established and upcoming Progressive Rock bands from Norway.';
  bands = BANDS;
  showHideWhy: boolean;
  showHideCriteria: boolean;
  showHideCredits: boolean;
  constructor() {
    this.showHideWhy = false;
    this.showHideCriteria = false;
    this.showHideCredits = false;
  }
  toggleShowWhy() {
    this.showHideWhy = !this.showHideWhy;
    if (this.showHideCriteria === true) {
      this.showHideCriteria = !this.showHideCriteria;
    }
    if (this.showHideCredits === true) {
      this.showHideCredits = !this.showHideCredits;
    }
  }
  toggleShowCriteria() {
    this.showHideCriteria = !this.showHideCriteria;
    if (this.showHideWhy === true) {
      this.showHideWhy = !this.showHideWhy;
    }
    if (this.showHideCredits === true) {
      this.showHideCredits = !this.showHideCredits;
    }
  }
  toggleShowCredits() {
    this.showHideCredits = !this.showHideCredits;
    if (this.showHideWhy === true) {
      this.showHideWhy = !this.showHideWhy;
    }
    if (this.showHideCriteria === true) {
      this.showHideCriteria = !this.showHideCriteria;
    }
  }
}
export class Band {
  id: number;
  name: string;
  artistId: string;
  fbId: string;
  status: boolean;
  onPlaylist: boolean;
  listeners: number;
}
