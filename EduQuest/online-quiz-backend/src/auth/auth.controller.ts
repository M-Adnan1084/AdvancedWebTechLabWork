import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDTO, LoginUserDTO } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterUserDTO) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginUserDTO) {
    return this.authService.login(dto);
  }
}
