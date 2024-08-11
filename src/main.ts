import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setVersion('1.0')
    .setTitle('Blog Api')
    .setDescription('use the base api url http://localhost:3003')
    .addServer('http://localhost:3003')
    .build();

  const doc = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/swagger', app, doc)

  await app.listen(3003);
}

bootstrap();
