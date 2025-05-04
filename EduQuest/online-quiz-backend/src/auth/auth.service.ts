import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '../users/user.entity';
import { RegisterUserDTO, LoginUserDTO } from './dto/user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  async register(data: RegisterUserDTO) {
    // simulate successful registration
    return { message: 'User registered successfully', data };
  }

  async login(data: LoginUserDTO) {
    // simulate successful login
    return { message: 'Login successful', data };
  }
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userRepo.findOne({ where: { username } });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    throw new UnauthorizedException('Invalid credentials');
  }

  return user;
}
}
