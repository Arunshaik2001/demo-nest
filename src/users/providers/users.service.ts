import { Injectable } from '@nestjs/common';
import { GetUsersDto } from '../dtos/get-users-dto';

@Injectable()
export class UsersService {
  findAll(getUsersParamDto: GetUsersDto, limit: number, offset: number) {
    return [
      {
        firstName: 'John',
      },
      {
        firstName: 'Doe',
      }
    ];
  }

  findById(id: number) {
    return {
      id: id,
      firstName: 'John',
      lastName: 'Doe',
    };
  }
}