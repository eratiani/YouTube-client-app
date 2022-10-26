import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    LogInComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderModule,
  ],
  exports: [LogInComponent,
    RegisterComponent,
  ],
})
export class AuthenticationModule { }
