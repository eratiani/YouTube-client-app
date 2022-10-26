export class AuthService {
  loggedIn:boolean = false;

  authenticated:string = localStorage.getItem('authenticated')!;

  logIn() {
    this.loggedIn = true;
    localStorage.setItem('authenticated', 'true');
    return true;
  }

  logOut() {
    this.loggedIn = false;
    localStorage.setItem('authenticated', 'false');
    return false;
  }

  isAuthenticated() {
    if (this.authenticated === 'true') {
      return true;
    }
    return false;
  }
}
