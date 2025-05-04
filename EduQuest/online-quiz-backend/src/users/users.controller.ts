import { Controller, Get, Post, Body } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() user: Partial<User> & { password: string }) {
    return this.usersService.create(user);
  }
}

@Controller('admin')
export class AdminController {
  @Get('dashboard')
  @Roles('admin') // Only admins can access
  getAdminDashboard() {
    return 'Welcome to Admin Dashboard';
  }
}
