import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {

  @Get('/:id/')
  getUsers(@Param('id', ParseIntPipe) id: number | undefined, @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number, @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number) {
    return 'Got request for users';
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return 'Got request for users';
  }
}
