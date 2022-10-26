import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  json: any;

  bar: string | undefined;

  constructor() {
    this.bar = 'hello';
  }

  ngOnInit(): void {
    this.bar = 'hello';
    /* eslint-disable global-require */

    this.json = require('./search-results.json');

    /* eslint-enable global-require */
  }

  date:any;

  fullDay:any;

  count:number = 0;

  myHighlightFunc = (e:any):any => {
    this.date = new Date(e);
    const currYear = 2019;
    const currMonth = 10;
    const currDay = new Date().getDate();
    const fullYear = this.date.getFullYear();
    const fullMonth = this.date.getMonth();
    this.fullDay = this.date.getDate();
    if (currYear - fullYear !== 0) {
      return 'Red';
    } if (currYear - fullYear === 0 && currMonth - fullMonth <= 6 && currMonth - fullMonth >= 1) {
      return 'Yellow';
    } if (currYear - fullYear === 0 && currMonth - fullMonth < 1 && currDay - this.fullDay >= 7) {
      return 'Green';
    }
    return 'Blue';
  };
}
