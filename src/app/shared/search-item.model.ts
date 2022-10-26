export class SearchItem {
  id: string;

  nameInput: string;

  nickNameInput: string;

  passwordInput:string;

  constructor(nameInput: string, nickNameInput: string, passwordInput: string, id: string) {
    this.id = id;
    this.nameInput = nameInput;
    this.nickNameInput = nickNameInput;
    this.passwordInput = passwordInput;
  }
}
