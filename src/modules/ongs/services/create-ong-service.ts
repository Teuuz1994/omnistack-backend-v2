import { Injectable } from '@nestjs/common';
import { Ongs } from '@prisma/client';

import PrismaClientService from '@/shared/prisma/prisma-client-service';
import CreateOngDTO from '../dto/create-ong-inputs';
import generateUniqueId from '@/utils/generate-unique-id';
import HashService from './hash-password';

@Injectable()
export default class CreateOngService {
  constructor(private client: PrismaClientService, private hash: HashService) { }

  async execute(input: CreateOngDTO): Promise<Ongs> {
    const id = generateUniqueId();

    const password = await this.hash.genHash(input.password);

    const ong = await this.client.ongs.create({
      data: {
        ...input,
        id,
        password,
      },
    });

    return ong;
  }
}
