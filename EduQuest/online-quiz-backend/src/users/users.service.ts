import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { id: id },
    });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { username },
    });
  }

  async create(user: Partial<User> & { password: string }): Promise<{ message: string; user: Partial<User> }> {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(user.password, salt);

      const newUser = this.usersRepository.create({
        ...user,
        password: hashedPassword,
      });

      const savedUser = await this.usersRepository.save(newUser);

      const { password, ...userWithoutPassword } = savedUser;

      return {
        message: 'User created successfully',
        user: userWithoutPassword,
      };
    } catch (error) {
      console.error('🔥 Error while creating user:', error);
      throw error;
    }
  }
}
