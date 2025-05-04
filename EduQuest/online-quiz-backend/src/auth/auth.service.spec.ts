import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { RegisterUserDTO, LoginUserDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async register(dto: RegisterUserDTO) {
    const existing = await this.userRepo.findOne({ where: { email: dto.email } });
    if (existing) throw new BadRequestException('User already exists');

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = this.userRepo.create({
      username: dto.username,
      email: dto.email,
      password: hashedPassword,
    });

    await this.userRepo.save(user);

    return { message: 'User registered', token: this.generateToken(user.id) };
  }

  async login(dto: LoginUserDTO) {
    const user = await this.userRepo.findOne({ where: { email: dto.email } });
    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }

    return { message: 'Login successful', token: this.generateToken(user.id) };
  }

  private generateToken(userId: number): string {
    return jwt.sign({ id: userId }, 'your_jwt_secret', { expiresIn: '1d' });
  }
}
