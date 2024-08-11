import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MinLength, ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PostType } from '../enums/postType.enum';
import { PostStatus } from '../enums/postStatus.enum';
import { CreatePostMetadataOptionsDto } from './createPostMetadataOptions.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {

  @ApiProperty({
    description: 'Create Post Title',
  })
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string

  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType

  @IsNotEmpty()
  @IsString()
  slug: string

  @IsNotEmpty()
  @IsEnum(PostStatus)
  status: PostStatus

  @IsOptional()
  content ?: string

  @IsOptional()
  @IsJSON()
  schema ?: string

  @IsOptional()
  @IsUrl()
  featuredImageUrl ?: string

  @IsISO8601()
  @Type(() => Date)
  @IsOptional()
  publishedOn ?: Date

  @IsOptional()
  @IsArray()
  @IsString({each: true})
  @MinLength(3, {each: true})
  tags : string[]

  @IsOptional()
  @IsArray()
  @ValidateNested({each: true})
  @Type(() => CreatePostMetadataOptionsDto)
  metaOptions: CreatePostMetadataOptionsDto[]
}


