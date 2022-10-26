import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SearchItem } from '../shared/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchItemService {
  json: JSON | undefined;

  SearchItem: SearchItem[] = [];

  constructor(private router: Router) {
    /* eslint-disable global-require */

    this.json = require('../search/search-results/search-results.json');

    /* eslint-enable global-require */
  }

  getItem() {
    const id = this.router.url.split('/')[2];
    return id;
  }
}
