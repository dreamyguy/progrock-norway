import { Component } from '@angular/core';

const BANDS: Band[] = [{
  id: 1,
  name: "Ruphus",
  artistId: "0f7lVIxa2peSrhZlF26ABt",
  fbId: "thebandruphus",
  status: false
}, {
  id: 2,
  name: "Pymlico",
  artistId: "5JJjg1uL3VhIH8qkvWuA60",
  fbId: "Pymlico",
  status: true
}, {
  id: 3,
  name: "Wallace Sidhrée",
  artistId: "0EiGue54P0MDdLnwCZ1nQp",
  fbId: "sidhree",
  status: true
}, {
  id: 4,
  name: "Wobbler",
  artistId: "00Uv0804nrBM2RxUBTkyHj",
  fbId: "wobblerofficial",
  status: true
}, {
  id: 5,
  name: "Gentle Knife",
  artistId: "4yeQFiXovGVyjjUKpTL9Fg",
  fbId: "gentleknife",
  status: true
}, {
  id: 6,
  name: "Kerrs Pink",
  artistId: "0Gd917dNf0RSMMbf6K2MAU",
  fbId: "kerrspinkofficial",
  status: true
}, {
  id: 7,
  name: "Høst",
  artistId: "7fjTLrnM9ZcxrV6a2MTcqG",
  fbId: "HOSTNORWAY",
  status: true
}, {
  id: 8,
  name: "The Samuel Jackson Five",
  artistId: "6DvSYxOlsQk4YPDVX9CmT7",
  fbId: "thesamueljacksonfive",
  status: true
}, {
  id: 9,
  name: "Bushman'S Revenge",
  artistId: "23ElmuKLosPuHchIPXuq5G",
  fbId: "Bushmans-Revenge-187627191297638",
  status: true
}, {
  id: 10,
  name: "Elephant9",
  artistId: "7fX6TkG03KYZv7jAaZKC5v",
  fbId: "elephant9music",
  status: true
}, {
  id: 11,
  name: "Knekklectric",
  artistId: "5FuLdmLZ9jQuymKPXF2X1S",
  fbId: "knekklectric",
  status: true
}, {
  id: 12,
  name: "Krokofant",
  artistId: "23A1NMMpoNpJkSlq4GwJUy",
  fbId: "krokofantmusic",
  status: true
}, {
  id: 13,
  name: "Akasha",
  artistId: "2qGWvRZ9undS1PEp0vmQi5",
  fbId: "",
  status: false
}, {
  id: 14,
  name: "Adventure",
  artistId: "32UctXTkymnqKbUnRNRRfB",
  fbId: "",
  status: true
}, {
  id: 15,
  name: "It's The End",
  artistId: "2X1da0cu0vjZkbA1c4P4hd",
  fbId: "",
  status: false
}, {
  id: 0,
  name: "Actionfredag",
  artistId: "4guh2PzBCv6hCLsb1QXkox",
  fbId: "actionfredag",
  status: true
}, {
  id: 0,
  name: "Airbag",
  artistId: "0gTqi1zdqD9s6islG2wLKC",
  fbId: "airbagsound",
  status: true
}, {
  id: 0,
  name: "Alwanzatar",
  artistId: "",
  fbId: "alwanzatar",
  status: true
}, {
  id: 0,
  name: "Annot Rhül",
  artistId: "2KAyxJ1rB0E2VVbQYmSIfb",
  fbId: "annotrhul",
  status: true
}, {
  id: 0,
  name: "Arabs in aspic",
  artistId: "1ELktqazsduNTO0cvCc3jG",
  fbId: "arabsinaspic",
  status: true
}, {
  id: 0,
  name: "Aunt Mary",
  artistId: "2IZ7AXDqIna8IbVPom5cbV",
  fbId: "auntmarytheband",
  status: true
}, {
  id: 0,
  name: "Bez Taktu",
  artistId: "0X0KoXOatGXQCXN59lUSTb",
  fbId: "BezTaktu",
  status: true
}, {
  id: 0,
  name: "The Brimstone Solar Radiation Band",
  artistId: "5IXiTe1pqWhapwnHSXozot",
  fbId: "The-Brimstone-Solar-Radiation-Band-6553618902",
  status: true
}, {
  id: 0,
  name: "Andre Drage Group",
  artistId: "",
  fbId: "andredragegroup",
  status: true
}, {
  id: 0,
  name: "D'accord",
  artistId: "2X2bWXtWvoXppjpTRQrxqE",
  fbId: "officialdaccord",
  status: true
}, {
  id: 0,
  name: "Elephant Plaza",
  artistId: "7yUyMUhLmYaqbKY07j5BY2",
  fbId: "elephantplaza",
  status: true
}, {
  id: 0,
  name: "Fatal fusion",
  artistId: "1M99Oc67ZFOzNKyGofRYEb",
  fbId: "Fatal-Fusion-49222763785",
  status: true
}, {
  id: 0,
  name: "Fraction distraction",
  artistId: "",
  fbId: "fractiondistraction",
  status: true
}, {
  id: 0,
  name: "Gazpacho",
  artistId: "1Joel9mDWSEZfHPE2KooW3",
  fbId: "Gazpacho.Official.BandPage",
  status: true
}, {
  id: 0,
  name: "Glutton",
  artistId: "2SPyFYBRgRoTnOXilDeSXj",
  fbId: "gluttonmusic",
  status: true
}, {
  id: 0,
  name: "Holon",
  artistId: "5EGRA2ywLUVNgIyhGmRu2Q",
  fbId: "holon.official",
  status: true
}, {
  id: 0,
  name: "Infringement",
  artistId: "5lAdM5NnorfqXYZYYr38Pd",
  fbId: "infringementband",
  status: true
}, {
  id: 0,
  name: "Ingelrii",
  artistId: "",
  fbId: "ingelrii",
  status: true
}, {
  id: 0,
  name: "Jono el grande",
  artistId: "5anYQcPEvvSc4zFfO2ZoOC",
  fbId: "",
  status: true
}, {
  id: 0,
  name: "Jordsjø",
  artistId: "",
  fbId: "jordsjoe",
  status: true
}, {
  id: 0,
  name: "Kambodsja",
  artistId: "1Vm8N0eT01j12THcY5tf8E",
  fbId: "kambodsja",
  status: true
}, {
  id: 0,
  name: "Kaukasus",
  artistId: "0Vv2qh9Y97inB6A7IFCNSN",
  fbId: "KaukasusBand",
  status: true
}, {
  id: 0,
  name: "Kongle",
  artistId: "6B6CU7w7klU9auHRkAfjmu",
  fbId: "konglebergen",
  status: true
}, {
  id: 0,
  name: "Kornmo",
  artistId: "0XtoxFrlri65HA8shgnNWy",
  fbId: "ildogvann",
  status: true
}, {
  id: 0,
  name: "Last Ember",
  artistId: "1LrUu1hZUl27WJkDEqi3ES",
  fbId: "LastEmberband",
  status: true
}, {
  id: 0,
  name: "Leprous",
  artistId: "4lgrzShsg2FLA89UM2fdO5",
  fbId: "leprousband",
  status: true
}, {
  id: 0,
  name: "Lucifer Was",
  artistId: "1LrUu1hZUl27WJkDEqi3ES",
  fbId: "Lucifer-Was-357893044376618",
  status: true
}, {
  id: 0,
  name: "Matterhorn",
  artistId: "5c4VNxynfxoOk4i5PPhxUI",
  fbId: "Matterhorn72Music",
  status: true
}, {
  id: 0,
  name: "Magic pie",
  artistId: "0ABvgllZiW792ERHXuJlGz",
  fbId: "MagicPieOfficial",
  status: true
}, {
  id: 0,
  name: "Major Parkinson",
  artistId: "5baLALm4KxY0I4z4OjumiZ",
  fbId: "majorparkinson",
  status: true
}, {
  id: 0,
  name: "Rhys Marsh",
  artistId: "6sAKiL3oRGFSTjSJH8zqzi",
  fbId: "rhysmarshmusic",
  status: true
}, {
  id: 0,
  name: "Needlepoint",
  artistId: "3GBPzzHwfT7iXD8u7iZvue",
  fbId: "needlepoint.official",
  status: true
}, {
  id: 0,
  name: "Nordagust",
  artistId: "026DSD4ZP6332fMZ3fYiON",
  fbId: "Nordagust-152203358171757",
  status: true
}, {
  id: 0,
  name: "Now We’ve Got Members",
  artistId: "2gqsPSVssvy91LHdo070k7",
  fbId: "NowWeveGotMembers",
  status: true
}, {
  id: 0,
  name: "Oak",
  artistId: "4rrrO8ECAaFRu685uh2XPn",
  fbId: "oakinoslo",
  status: true
}, {
  id: 0,
  name: "The Opium Cartel",
  artistId: "5bDDhDrwBbf8iXjJa1E8Fd",
  fbId: "theopiumcartel",
  status: true
}, {
  id: 0,
  name: "Ossicles",
  artistId: "5YIOI1tcgj46yC7GgDHv24",
  fbId: "Ossicles",
  status: true
}, {
  id: 0,
  name: "Panzerpappa",
  artistId: "0lGGauQMSjmuLazY2bUHnm",
  fbId: "Panzerpappa-112379508814650",
  status: true
}, {
  id: 0,
  name: "Permian Incident",
  artistId: "4Y9tlDA9OEkpv2eP212JiC",
  fbId: "PermianIncident",
  status: true
}, {
  id: 0,
  name: "Pixie Ninja",
  artistId: "4vEaHdiNk8sisbw3qlOBw9",
  fbId: "pixieninjaband",
  status: true
}, {
  id: 0,
  name: "Pluto And the Planets",
  artistId: "4GGwyrsS0vB4iM5hMa6MMw",
  fbId: "PLUTO-AND-THE-PLANETS-19611404996",
  status: true
}, {
  id: 0,
  name: "Procosmian Fannyfiddlers",
  artistId: "45M2IUBxM7WgEi8T8ZuMFy",
  fbId: "Procosmian-Fannyfiddlers-290427701038809",
  status: true
}, {
  id: 0,
  name: "Professor Tip Top",
  artistId: "4Xp9pfjXi7jFlGmcoeUYJz",
  fbId: "Professor-Tip-Top-282706708456217",
  status: true
}, {
  id: 0,
  name: "Progatom",
  artistId: "19yLPM8u9mkl3fP8Fyo6wC",
  fbId: "progatom",
  status: true
}, {
  id: 0,
  name: "Rendezvous Point",
  artistId: "0AhnRzNnHI2Yhx9d00H5Cp",
  fbId: "RendezvousPointOfficial",
  status: true
}, {
  id: 0,
  name: "Bjørn Riis Band",
  artistId: "0itkMtdd5OVeG2FFDE7J6z",
  fbId: "BjornRiisGuitarPage",
  status: true
}, {
  id: 0,
  name: "Seid",
  artistId: "1szxWhgzTXIkG7FJ79gHzx",
  fbId: "seidrock",
  status: true
}, {
  id: 0,
  name: "Seven Impale",
  artistId: "56h6oZFC4GnKgMA3WQtj35",
  fbId: "sevenimpale",
  status: true
}, {
  id: 0,
  name: "Shaman Elephant",
  artistId: "1bA1j1Wd0eDKqbsxON4a7d",
  fbId: "shamanelephant",
  status: true
}, {
  id: 0,
  name: "Shamblemaths",
  artistId: "3wnsekzvTEDVdgtWFmiPiZ",
  fbId: "shamblemaths",
  status: true
}, {
  id: 0,
  name: "Det Skandaløse Orkester",
  artistId: "3QitecJCQGP9Nj7MIDkCZg",
  fbId: "skandalose",
  status: true
}, {
  id: 0,
  name: "Soup",
  artistId: "3yb7jKqLaO7FI7MzQLVysm",
  fbId: "soupsound",
  status: true
}, {
  id: 0,
  name: "Suburban Savages",
  artistId: "3OSklNkdsa2o0BFFb8Raej",
  fbId: "SuburbanSavages",
  status: true
}, {
  id: 0,
  name: "Swifan Eolh",
  artistId: "",
  fbId: "mudrasiddhi",
  status: true
}, {
  id: 0,
  name: "Tangle Edge",
  artistId: "0QWWgOLiHu17nLFzTIBM86",
  fbId: "Tangle-Edge-134566096658445",
  status: true
}, {
  id: 0,
  name: "Tenderton",
  artistId: "4pX9ElBqHulcUh35oAuBOc",
  fbId: "tendertonband",
  status: true
}, {
  id: 0,
  name: "Terramater",
  artistId: "6CMBH89qR6KmTfwwRRFlBJ",
  fbId: "Terramater-203111543040208",
  status: true
}, {
  id: 0,
  name: "Thule",
  artistId: "7rSWPijuc6fv6lGAno5trd",
  fbId: "Thule-139490042768792",
  status: true
}, {
  id: 0,
  name: "The Chronicles of Father Robin",
  artistId: "",
  fbId: "The-Chronicles-of-Father-Robin-109306549137345",
  status: true
}, {
  id: 0,
  name: "Trojka",
  artistId: "2EKOcTjcnzeH0Rd3PPoH4m",
  fbId: "TrojkaBergen",
  status: true
}, {
  id: 0,
  name: "Tusmørke",
  artistId: "5JdO8K76wH3sK5J9v3Iyah",
  fbId: "Tusmorke",
  status: true
}, {
  id: 0,
  name: "Umpfel",
  artistId: "0aUEDr54nJBBanpzDTMYfd",
  fbId: "umpfel",
  status: true
}, {
  id: 0,
  name: "Weserbergland",
  artistId: "0voGgCtm0p027RhxjokAcg",
  fbId: "weserberglandband",
  status: true
}, {
  id: 0,
  name: "When Mary",
  artistId: "",
  fbId: "whenmary",
  status: true
}, {
  id: 0,
  name: "White Willow",
  artistId: "62f9LejTohfxGWhMP00ZrS",
  fbId: "whitewillowband",
  status: true
}, {
  id: 0,
  name: "The Windmill",
  artistId: "5iFzNxkNt66KeiLWdE7H05",
  fbId: "The-Windmill-142175499160527",
  status: true
}, {
  id: 0,
  name: "Oriental Sunshine",
  artistId: "5YD1psyl46YI0MjK61g9Xg",
  fbId: "",
  status: true
}, {
  id: 0,
  name: "1099",
  artistId: "12zVnfDLMYNY4LlE3rBYrM",
  fbId: "",
  status: true
}, {
  id: 0,
  name: "DejaVu",
  artistId: "1xLZMr0J6UZYw5wI20hNT8",
  fbId: "",
  status: true
}, {
  id: 0,
  name: "Farmers Market",
  artistId: "5NVnpmSzeucVtzvugmlYqT",
  fbId: "",
  status: true
}, {
  id: 0,
  name: "Hedvig Mollestad Trio",
  artistId: "33Ynrn4NZsANMBJsFFqB7Y",
  fbId: "HedvigMollestadTrio",
  status: true
}, {
  id: 0,
  name: "Junipher Greene",
  artistId: "66XeEqwvu77N79QtyvBqO3",
  fbId: "juniphergreenejubilee",
  status: false
}, {
  id: 0,
  name: "Motorpsycho",
  artistId: "2bNIAjyL3hFCuQBQqhPN4T",
  fbId: "",
  status: true
}, {
  id: 0,
  name: "Popol Ace",
  artistId: "56X1tHiY56H9hjdHRxel2u",
  fbId: "",
  status: false
}, {
  id: 0,
  name: "Popol Vuh",
  artistId: "5zeiqAaIiDrjiDch33A2lT",
  fbId: "",
  status: false
}, {
  id: 0,
  name: "Prudence",
  artistId: "46Yft7aKaVVOyuSvu2Fyka",
  fbId: "",
  status: false
}, {
  id: 0,
  name: "Synkoke",
  artistId: "02MC05E7L2Xl3cVUnTPd2d",
  fbId: "synkoke",
  status: true
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
  fbId: string;
  status: boolean;
}
