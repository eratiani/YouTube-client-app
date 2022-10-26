import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder, Validators,
} from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  users: any = JSON.parse(localStorage.getItem('registeredUsers') as string);

  lang:any;

  logInForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.logInForm = formBuilder.group({
      nickNameInput: ['', [Validators.required]],
      passwordInput: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  ngOnInit(): void {
    this.lang = '';
  }

  postData() {
    if (this.users.length === 0) {
      /* eslint-disable */
      return alert('register new account');
    }
 return this.users.find((el:User) => {
      if (el.nickNameInput === this.logInForm.value.nickNameInput ) {
        if (el.passwordInput === this.logInForm.value.passwordInput) {
          localStorage.setItem('currUserId', el.id);
          localStorage.setItem('currUserNik', el.nickNameInput);
          localStorage.setItem('currUserPass', el.passwordInput);
          this.router.navigateByUrl('search');
          return this.authService.logIn();
        } else {
          /* eslint-disable */
          return alert('wrong username or password');
        }
      } else {
        /* eslint-disable */
       return alert('wrong username or password');
      }
    });
  }
}
