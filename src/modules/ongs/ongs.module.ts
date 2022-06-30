import PrismaClientService from '@/shared/prisma/prisma-client-service';
import { Module } from '@nestjs/common';

import OngsResolver from './resolvers/ong-resolver';
import CreateOngService from './services/create-ong-service';
import HashService from './services/hash-password';

@Module({
  providers: [CreateOngService, HashService, OngsResolver, PrismaClientService],
})
export default class OngsModule { }
