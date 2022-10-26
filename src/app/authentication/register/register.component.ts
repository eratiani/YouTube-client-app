import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder, Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserRegistrationService } from '../../services/user-registration.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  currUser: any;

  lang:any;

  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private userRegistrationService: UserRegistrationService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.registerForm = this.formBuilder.group({
      nameInput: ['', [Validators.required]],
      nickNameInput: ['', [Validators.required]],
      passwordInput: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  ngOnInit(): void {
    this.lang = '';
    if (localStorage.getItem('authenticated') === 'true') {
      this.router.navigate(['search']);
    }
  }

  postData(form: any) {
    if (form.invalid) {
      /* eslint-disable */
      return alert('something went wrong');
    } else {
    const user = new User(form.nameInput, form.nickNameInput, form.passwordInput);
    localStorage.setItem('currUserNik', user.nickNameInput);
    localStorage.setItem('currUserPass', user.passwordInput);
    localStorage.setItem('currUserId', user.id);
    this.userRegistrationService.addUser(user);
    this.authService.logIn();
    localStorage.setItem("authenticated", "true")
    location.reload();
    return ""
  }
 
}
}
