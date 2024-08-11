import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetUsersDto {
  @ApiPropertyOptional({
    description: 'Get users from the database using id',
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
