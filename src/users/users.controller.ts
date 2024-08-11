import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersDto } from './dtos/get-users-dto';
import { PatchUserDto } from './dtos/patch-users.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}


  @Get('/:id?/')
  getUsers(
    @Param() getUserDTO: GetUsersDto,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return this.userService.findAll(getUserDTO, limit, page);
  }

  @Post()
  createUser(@Body() createUserDto : CreateUserDto) {
    return 'Got request for users';
  }

  @Post()
  patchUser(@Body() patchUserDto: PatchUserDto) {
    return 'Got request for users';
  }
}
