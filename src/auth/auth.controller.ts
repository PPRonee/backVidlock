import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() createAuthDto: CreateAuthDto) {
    console.log('je suis ici');
    return this.authService.register(createAuthDto);
  }

  @Post('/login/client')
  loginClient(@Body() loginDto: LoginDto): Promise<{ accessToken: string }> {
    return this.authService.loginClient(loginDto);
  }

  @Post('/login/admin')
  loginAdmin(@Body() loginDto: LoginDto): Promise<{ accessToken: string }> {
    return this.authService.loginAdmin(loginDto);
  }
}
