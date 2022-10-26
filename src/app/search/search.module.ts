import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeaderModule,
    BrowserModule,
  ],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
  ],
})
export class SearchModule { }
