import { Component } from '@angular/core';
import artists from './data/artists.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Progressive Rock - Norway';
  subtitle = 'A list of established and upcoming Progressive Rock bands from Norway.';
  bands = artists;
  showHideWhy: boolean;
  showHideCriteria: boolean;
  showHideCredits: boolean;
  toggleClassWhy: string;
  toggleClassCriteria: string;
  toggleClassCredits: string;
  constructor() {
    this.showHideWhy = false;
    this.showHideCriteria = false;
    this.showHideCredits = false;
    this.toggleClassWhy = 'inactive';
    this.toggleClassCriteria = 'inactive';
    this.toggleClassCredits = 'inactive';
  }
  setClassWhy() {
    if (this.toggleClassWhy == 'inactive') {
      this.toggleClassWhy = 'active';
    } else {
      this.toggleClassWhy = 'inactive';
    }
  }
  setClassCriteria() {
    if (this.toggleClassCriteria == 'inactive') {
      this.toggleClassCriteria = 'active';
    } else {
      this.toggleClassCriteria = 'inactive';
    }
  }
  setClassCredits() {
    if (this.toggleClassCredits == 'inactive') {
      this.toggleClassCredits = 'active';
    } else {
      this.toggleClassCredits = 'inactive';
    }
  }
  toggleShowWhy() {
    this.setClassWhy();
    this.showHideWhy = !this.showHideWhy;
    if (this.showHideCriteria === true) {
      this.showHideCriteria = !this.showHideCriteria;
    }
    if (this.showHideCredits === true) {
      this.showHideCredits = !this.showHideCredits;
    }
    if (this.toggleClassCriteria === 'active') {
      this.setClassCriteria();
    }
    if (this.toggleClassCredits === 'active') {
      this.setClassCredits();
    }
  }
  toggleShowCriteria() {
    this.setClassCriteria();
    this.showHideCriteria = !this.showHideCriteria;
    if (this.showHideWhy === true) {
      this.showHideWhy = !this.showHideWhy;
    }
    if (this.showHideCredits === true) {
      this.showHideCredits = !this.showHideCredits;
    }
    if (this.toggleClassWhy === 'active') {
      this.setClassWhy();
    }
    if (this.toggleClassCredits === 'active') {
      this.setClassCredits();
    }
  }
  toggleShowCredits() {
    this.setClassCredits();
    this.showHideCredits = !this.showHideCredits;
    if (this.showHideWhy === true) {
      this.showHideWhy = !this.showHideWhy;
    }
    if (this.showHideCriteria === true) {
      this.showHideCriteria = !this.showHideCriteria;
    }
    if (this.toggleClassWhy === 'active') {
      this.setClassWhy();
    }
    if (this.toggleClassCriteria === 'active') {
      this.setClassCriteria();
    }
  }
}
