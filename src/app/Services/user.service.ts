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

  async updateUser(updatedUser: User): Promise<void> {
    const response = await fetch(`${this.url}/${updatedUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });

    if (!response.ok) {
      throw new Error(`Failed to update city with id ${updatedUser.id}`);
    }  
  }

  async resetUpdatedTimes(userId: number): Promise<void> {
    const response = await fetch(`${this.url}/${userId}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ updatedUserTimes: 0 }), 
    });

    if (!response.ok) {
      throw new Error(`Failed to reset updatedUserTimes for user with id ${userId}`);
    }
  }
}
