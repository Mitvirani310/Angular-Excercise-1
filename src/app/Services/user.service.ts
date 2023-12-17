import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  url = 'http://localhost:3000/users';

  async getAllUsers(): Promise<User[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getUserById(id :number=0) : Promise<User> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}
