import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HeaderModule } from './header/header.module';
import { SearchModule } from './search/search.module';
import { AuthService } from './services/auth.service';
import { LogInGuardService } from './services/logIn-guard.service';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SearchModule,
    ReactiveFormsModule,
    AuthenticationModule,
  ],
  providers: [LogInGuardService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
