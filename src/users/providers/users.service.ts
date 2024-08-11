import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersDto } from '../dtos/get-users-dto';
import { AuthService } from '../../auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService
  ) {}

  findAll(getUsersParamDto: GetUsersDto, limit: number, offset: number) {
    this.authService.isAuthenticated();
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