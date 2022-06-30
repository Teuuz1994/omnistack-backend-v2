import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import PrismaClientService from './shared/prisma/prisma-client-service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const prismaService = app.get(PrismaClientService);
  await prismaService.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();
