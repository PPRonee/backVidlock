import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginAdminDto } from './dto/loginAdmin-auth.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('register')
  register(@Body() createAuthDto: CreateAdminDto) {
    console.log('je suis ici');
    return this.adminService.registerAdmin(createAuthDto);
  }
}
