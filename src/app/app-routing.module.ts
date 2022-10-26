import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HeaderComponent } from './header/header/header.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { LogInGuardService } from './services/logIn-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchResultsComponent, canActivate: [LogInGuardService] },
  { path: 'search/:id', component: SearchItemComponent, canActivate: [LogInGuardService] },
  { path: '**', component: RouteNotFoundComponent, canActivate: [LogInGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
