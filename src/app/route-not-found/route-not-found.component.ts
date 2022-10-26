import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-not-found',
  templateUrl: './route-not-found.component.html',
  styleUrls: ['./route-not-found.component.css'],
})
export class RouteNotFoundComponent implements OnInit {
  home:string = 's';

  constructor() {
    this.home = 'sda';
  }

  ngOnInit(): void {
    this.home = 'sda';
  }
}
