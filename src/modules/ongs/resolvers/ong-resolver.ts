import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InternalServerErrorException } from '@nestjs/common';

import PrismaClientService from '@/shared/prisma/prisma-client-service';
import Ong from '../model/ong-model';
import CreateOngArgs from '../args/create-ong-args';
import CreateOngService from '../services/create-ong-service';

@Resolver(() => Ong)
export default class OngsResolver {
  constructor(
    private client: PrismaClientService,
    private createOngService: CreateOngService,
  ) { }

  @Query(() => [Ong])
  async getOngs() {
    try {
      const ongs = await this.client.ongs.findMany({
        include: {
          Incidents: true,
        },
      });
      return ongs;
    } catch {
      throw new InternalServerErrorException();
    }
  }

  @Query(() => Ong)
  async getOngById(@Args({ name: 'id' }) id: string) {
    try {
      const ong = await this.client.ongs.findFirst({
        where: {
          id,
        },
      });

      return ong;
    } catch {
      throw new InternalServerErrorException();
    }
  }

  @Mutation(() => Ong)
  async createOng(@Args() args: CreateOngArgs) {
    try {
      const ong = await this.createOngService.execute(args);
      return ong;
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
