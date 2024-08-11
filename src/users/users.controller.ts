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
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}


  @ApiOperation({
    summary: 'Get all users',
  })
  @ApiResponse({
    status: 200,
    description: 'fetches users successful'
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'number of users per api call',
    example: 10,
  })
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
