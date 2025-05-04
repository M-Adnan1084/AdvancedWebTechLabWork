import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterUserDTO {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}

export class LoginUserDTO {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
