// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { User } from '../user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  updateUser(userId: string, user: User): void {
    const index = this.users.findIndex(u => u.id === userId);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(userId: string): void {
    this.users = this.users.filter(u => u.id !== userId);
  }

  getUsers(): User[] {
    return this.users;
  }

  getUserById(userId: string): User {
    return this.users.find(u => u.id === userId);
  }
}
