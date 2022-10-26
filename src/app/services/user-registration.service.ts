import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserRegistrationService {
  users: User[] = [];

  constructor() {
    this.loadState();
  }

  getUsers() {
    return this.users;
  }

  getUser(id: string) {
    return this.users.find((n) => n.id === id);
  }

  addUser(user: User) {
    this.users.push(user);
    this.saveState();
  }

  updateUser(id: string, updatedField: Partial<User>) {
    const user:any = this.getUser(id);
    Object.assign(user, updatedField);
    this.saveState();
  }

  deleteUser(id:string) {
    const userIndex = this.users.findIndex((n) => n.id === id);
    if (userIndex === -1) {
      return;
    }
    this.users.splice(userIndex, 1);
    this.saveState();
  }

  saveState() {
    localStorage.setItem('registeredUsers', JSON.stringify(this.users));
  }

  loadState() {
    try {
      const usersInStorage:any = JSON.parse(localStorage.getItem('registeredUsers') as string);
      if (!usersInStorage) return;
      this.users = usersInStorage;
    } catch (error) {
      /* eslint-disable */
      console.log('There was error retrieving the tasks from local storage', error);
    }
  }
}
