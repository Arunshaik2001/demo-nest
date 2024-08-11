import { IsNotEmpty, IsString } from 'class-validator';


export class CreatePostMetadataOptionsDto {
  @IsNotEmpty()
  @IsString()
  key: string

  @IsNotEmpty()
  value: any
}