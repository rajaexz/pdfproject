// src/user/user.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  addUser(@Body() user: User): void {
    this.userService.addUser(user);
  }

  @Put(':id')
  updateUser(@Param('id') userId: string, @Body() user: User): void {
    this.userService.updateUser(userId, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') userId: string): void {
    this.userService.deleteUser(userId);
  }

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') userId: string): User {
    return this.userService.getUserById(userId);
  }
}
