import { Component, OnInit } from '@angular/core';
import { SearchItemService } from 'src/app/services/search-item.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css'],
})
export class SearchItemComponent implements OnInit {
  bar: string | undefined;

  json: any;

  elementOnPage:any;

  constructor(private searchItem: SearchItemService) {
    this.bar = 'hello';
  }

  ngOnInit(): void {
    this.bar = 'hello';
    /* eslint-disable global-require */

    this.json = require('../search-results/search-results.json');

    /* eslint-enable global-require */
    const id = this.searchItem.getItem();
    this.elementOnPage = this.json.items.filter((e:any) => e.id === id);
  }
}
