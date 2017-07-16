import { Component } from '@angular/core';

const BANDS: Band[] = [{
  id: 1,
  name: "Ruphus",
  artistId: "0f7lVIxa2peSrhZlF26ABt",
  fbId: "thebandruphus"
}, {
  id: 2,
  name: "Pymlico",
  artistId: "5JJjg1uL3VhIH8qkvWuA60",
  fbId: "Pymlico"
}, {
  id: 3,
  name: "Wallace Sidhrée",
  artistId: "0EiGue54P0MDdLnwCZ1nQp",
  fbId: "sidhree"
}, {
  id: 4,
  name: "Wobbler",
  artistId: "00Uv0804nrBM2RxUBTkyHj",
  fbId: "wobblerofficial"
}, {
  id: 5,
  name: "Gentle Knife",
  artistId: "4yeQFiXovGVyjjUKpTL9Fg",
  fbId: "gentleknife"
}, {
  id: 6,
  name: "Kerrs Pink",
  artistId: "0Gd917dNf0RSMMbf6K2MAU",
  fbId: "kerrspinkofficial"
}, {
  id: 7,
  name: "Høst",
  artistId: "7fjTLrnM9ZcxrV6a2MTcqG",
  fbId: "HOSTNORWAY"
}, {
  id: 8,
  name: "The Samuel Jackson Five",
  artistId: "6DvSYxOlsQk4YPDVX9CmT7",
  fbId: "thesamueljacksonfive"
}, {
  id: 9,
  name: "Bushman'S Revenge",
  artistId: "23ElmuKLosPuHchIPXuq5G",
  fbId: "Bushmans-Revenge-187627191297638"
}, {
  id: 10,
  name: "Elephant9",
  artistId: "7fX6TkG03KYZv7jAaZKC5v",
  fbId: "elephant9music"
}, {
  id: 11,
  name: "Knekklectric",
  artistId: "5FuLdmLZ9jQuymKPXF2X1S",
  fbId: "knekklectric"
}, {
  id: 12,
  name: "Krokofant",
  artistId: "23A1NMMpoNpJkSlq4GwJUy",
  fbId: "krokofantmusic"
}, {
  id: 13,
  name: "Akasha",
  artistId: "2qGWvRZ9undS1PEp0vmQi5",
  fbId: ""
}, {
  id: 14,
  name: "Adventure",
  artistId: "32UctXTkymnqKbUnRNRRfB",
  fbId: ""
}, {
  id: 15,
  name: "It's The End",
  artistId: "2X1da0cu0vjZkbA1c4P4hd",
  fbId: ""
}, {
  id: 0,
  name: "Actionfredag",
  artistId: "4guh2PzBCv6hCLsb1QXkox",
  fbId: "actionfredag"
}, {
  id: 0,
  name: "Airbag",
  artistId: "0gTqi1zdqD9s6islG2wLKC",
  fbId: "airbagsound"
}, {
  id: 0,
  name: "Alwanzatar",
  artistId: "",
  fbId: "alwanzatar"
}, {
  id: 0,
  name: "Annot Rhül",
  artistId: "",
  fbId: "annotrhul"
}, {
  id: 0,
  name: "Arabs in aspic",
  artistId: "1ELktqazsduNTO0cvCc3jG",
  fbId: "arabsinaspic"
}, {
  id: 0,
  name: "Aunt Mary",
  artistId: "2IZ7AXDqIna8IbVPom5cbV",
  fbId: "auntmarytheband"
}, {
  id: 0,
  name: "Bez Taktu",
  artistId: "",
  fbId: "BezTaktu"
}, {
  id: 0,
  name: "The Brimstone Solar Radiation Band",
  artistId: "",
  fbId: "The-Brimstone-Solar-Radiation-Band-6553618902"
}, {
  id: 0,
  name: "Andre Drage Group",
  artistId: "",
  fbId: "andredragegroup"
}, {
  id: 0,
  name: "D'accord",
  artistId: "2X2bWXtWvoXppjpTRQrxqE",
  fbId: "officialdaccord"
}, {
  id: 0,
  name: "Elephant Plaza",
  artistId: "",
  fbId: "elephantplaza"
}, {
  id: 0,
  name: "Fatal fusion",
  artistId: "1M99Oc67ZFOzNKyGofRYEb",
  fbId: "Fatal-Fusion-49222763785"
}, {
  id: 0,
  name: "Fraction distraction",
  artistId: "",
  fbId: "fractiondistraction"
}, {
  id: 0,
  name: "Gazpacho",
  artistId: "1Joel9mDWSEZfHPE2KooW3",
  fbId: "Gazpacho.Official.BandPage"
}, {
  id: 0,
  name: "Glutton",
  artistId: "",
  fbId: "gluttonmusic"
}, {
  id: 0,
  name: "Holon",
  artistId: "",
  fbId: "holon.official"
}, {
  id: 0,
  name: "Infringement",
  artistId: "5lAdM5NnorfqXYZYYr38Pd",
  fbId: "infringementband"
}, {
  id: 0,
  name: "Ingelrii",
  artistId: "",
  fbId: "ingelrii"
}, {
  id: 0,
  name: "Jono el grande",
  artistId: "5anYQcPEvvSc4zFfO2ZoOC",
  fbId: ""
}, {
  id: 0,
  name: "Jordsjø",
  artistId: "",
  fbId: "jordsjoe"
}, {
  id: 0,
  name: "Kambodsja",
  artistId: "",
  fbId: "kambodsja"
}, {
  id: 0,
  name: "Kaukasus",
  artistId: "0Vv2qh9Y97inB6A7IFCNSN",
  fbId: "KaukasusBand"
}, {
  id: 0,
  name: "Kongle",
  artistId: "6B6CU7w7klU9auHRkAfjmu",
  fbId: "konglebergen"
}, {
  id: 0,
  name: "Kornmo",
  artistId: "0XtoxFrlri65HA8shgnNWy",
  fbId: "ildogvann"
}, {
  id: 0,
  name: "Last Ember",
  artistId: "",
  fbId: "LastEmberband"
}, {
  id: 0,
  name: "Leprous",
  artistId: "4lgrzShsg2FLA89UM2fdO5",
  fbId: "leprousband"
}, {
  id: 0,
  name: "Lucifer Was",
  artistId: "",
  fbId: "Lucifer-Was-357893044376618"
}, {
  id: 0,
  name: "Matterhorn",
  artistId: "",
  fbId: "Matterhorn72Music"
}, {
  id: 0,
  name: "Magic pie",
  artistId: "0ABvgllZiW792ERHXuJlGz",
  fbId: "MagicPieOfficial"
}, {
  id: 0,
  name: "Major Parkinson",
  artistId: "",
  fbId: "majorparkinson"
}, {
  id: 0,
  name: "Rhys Marsh",
  artistId: "",
  fbId: "rhysmarshmusic"
}, {
  id: 0,
  name: "Needlepoint",
  artistId: "3GBPzzHwfT7iXD8u7iZvue",
  fbId: "needlepoint.official"
}, {
  id: 0,
  name: "Nordagust",
  artistId: "",
  fbId: "Nordagust-152203358171757"
}, {
  id: 0,
  name: "Now’ve Got Members",
  artistId: "",
  fbId: "NowWeveGotMembers"
}, {
  id: 0,
  name: "Oak",
  artistId: "4rrrO8ECAaFRu685uh2XPn",
  fbId: "oakinoslo"
}, {
  id: 0,
  name: "The opium cartel",
  artistId: "",
  fbId: "theopiumcartel"
}, {
  id: 0,
  name: "Ossicles",
  artistId: "5YIOI1tcgj46yC7GgDHv24",
  fbId: "Ossicles"
}, {
  id: 0,
  name: "Panzerpappa",
  artistId: "0lGGauQMSjmuLazY2bUHnm",
  fbId: "Panzerpappa-112379508814650"
}, {
  id: 0,
  name: "Permian Incident",
  artistId: "",
  fbId: "PermianIncident"
}, {
  id: 0,
  name: "Pixie Ninja",
  artistId: "4vEaHdiNk8sisbw3qlOBw9",
  fbId: "pixieninjaofficial"
}, {
  id: 0,
  name: "Pluto And the Planets",
  artistId: "",
  fbId: "PLUTO-AND-THE-PLANETS-19611404996"
}, {
  id: 0,
  name: "Procosmian fannyfiddlers",
  artistId: "",
  fbId: "Procosmian-Fannyfiddlers-290427701038809"
}, {
  id: 0,
  name: "Professor Tip Top",
  artistId: "",
  fbId: "Professor-Tip-Top-282706708456217"
}, {
  id: 0,
  name: "Progatom",
  artistId: "",
  fbId: "progatom"
}, {
  id: 0,
  name: "Rendezvous Point",
  artistId: "",
  fbId: "RendezvousPointOfficial"
}, {
  id: 0,
  name: "Bjørn Riis Band",
  artistId: "",
  fbId: "BjornRiisGuitarPage"
}, {
  id: 0,
  name: "Seid",
  artistId: "1szxWhgzTXIkG7FJ79gHzx",
  fbId: "seidrock"
}, {
  id: 0,
  name: "Seven Impale",
  artistId: "56h6oZFC4GnKgMA3WQtj35",
  fbId: "sevenimpale"
}, {
  id: 0,
  name: "Shaman Elephant",
  artistId: "1bA1j1Wd0eDKqbsxON4a7d",
  fbId: "shamanelephant"
}, {
  id: 0,
  name: "Shamblemaths",
  artistId: "",
  fbId: "shamblemaths"
}, {
  id: 0,
  name: "Det Skandaløse Orkester",
  artistId: "3QitecJCQGP9Nj7MIDkCZg",
  fbId: "skandalose"
}, {
  id: 0,
  name: "Soup",
  artistId: "",
  fbId: "soupsound"
}, {
  id: 0,
  name: "Suburban Savages",
  artistId: "",
  fbId: "SuburbanSavages"
}, {
  id: 0,
  name: "Swifan Eolh",
  artistId: "",
  fbId: "mudrasiddhi"
}, {
  id: 0,
  name: "Tangle Edge",
  artistId: "0QWWgOLiHu17nLFzTIBM86",
  fbId: "Tangle-Edge-134566096658445"
}, {
  id: 0,
  name: "Tenderton",
  artistId: "",
  fbId: "tendertonband"
}, {
  id: 0,
  name: "Terramater",
  artistId: "",
  fbId: "Terramater-203111543040208"
}, {
  id: 0,
  name: "Thule",
  artistId: "",
  fbId: "Thule-139490042768792"
}, {
  id: 0,
  name: "The Chronicles of Father Robin",
  artistId: "",
  fbId: "The-Chronicles-of-Father-Robin-109306549137345"
}, {
  id: 0,
  name: "Trojka",
  artistId: "",
  fbId: "TrojkaBergen"
}, {
  id: 0,
  name: "Tusmørke",
  artistId: "5JdO8K76wH3sK5J9v3Iyah",
  fbId: "Tusmorke"
}, {
  id: 0,
  name: "Umpfel",
  artistId: "",
  fbId: "umpfel"
}, {
  id: 0,
  name: "Weserbergland",
  artistId: "0voGgCtm0p027RhxjokAcg",
  fbId: "weserberglandband"
}, {
  id: 0,
  name: "When Mary",
  artistId: "",
  fbId: "whenmary"
}, {
  id: 0,
  name: "White Willow",
  artistId: "62f9LejTohfxGWhMP00ZrS",
  fbId: "whitewillowband"
}, {
  id: 0,
  name: "The Windmill",
  artistId: "5iFzNxkNt66KeiLWdE7H05",
  fbId: "The-Windmill-142175499160527"
}, {
  id: 0,
  name: "Oriental Sunshine",
  artistId: "5YD1psyl46YI0MjK61g9Xg",
  fbId: ""
}, {
  id: 0,
  name: "1099",
  artistId: "12zVnfDLMYNY4LlE3rBYrM",
  fbId: ""
}, {
  id: 0,
  name: "DejaVu",
  artistId: "1xLZMr0J6UZYw5wI20hNT8",
  fbId: ""
}, {
  id: 0,
  name: "Farmers Market",
  artistId: "5NVnpmSzeucVtzvugmlYqT",
  fbId: ""
}, {
  id: 0,
  name: "Hedvig Mollestad Trio",
  artistId: "33Ynrn4NZsANMBJsFFqB7Y",
  fbId: ""
}, {
  id: 0,
  name: "Junipher Greene",
  artistId: "66XeEqwvu77N79QtyvBqO3",
  fbId: ""
}, {
  id: 0,
  name: "Motorpsycho",
  artistId: "2bNIAjyL3hFCuQBQqhPN4T",
  fbId: ""
}, {
  id: 0,
  name: "Popol Ace",
  artistId: "56X1tHiY56H9hjdHRxel2u",
  fbId: ""
}, {
  id: 0,
  name: "Popol Vuh",
  artistId: "5zeiqAaIiDrjiDch33A2lT",
  fbId: ""
}, {
  id: 0,
  name: "Prudence",
  artistId: "46Yft7aKaVVOyuSvu2Fyka",
  fbId: ""
}, {
  id: 0,
  name: "Synkoke",
  artistId: "02MC05E7L2Xl3cVUnTPd2d",
  fbId: ""
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
}
