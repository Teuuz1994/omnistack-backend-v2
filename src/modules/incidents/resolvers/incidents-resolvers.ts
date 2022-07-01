import { InternalServerErrorException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';

import PrismaClientService from '@/shared/prisma/prisma-client-service';
import CreateIncidentArgs from '../args/create-incident-args';
import Incident from '../model/incident-model';
import CreateIncidentService from '../service/create-incident-service';
import DeleteIncidentService from '../service/delete-incident-service';
import SuccessDeleteIncident from '../model/success-delete-incident';

@Resolver(() => Incident)
class IncidentsResolver {
  constructor(
    private client: PrismaClientService,
    private deleteIncidentService: DeleteIncidentService,
    private createIncidentService: CreateIncidentService,
  ) { }

  @Query(() => [Incident])
  async getIncidents(@Args({ name: 'page', type: () => Int }) page: number) {
    try {
      page = 1;
      const incidents = await this.client.incidents.findMany({
        take: page * 5,
        include: {
          ong: true,
        },
      });

      return incidents;
    } catch {
      throw new InternalServerErrorException();
    }
  }

  @Mutation(() => SuccessDeleteIncident)
  async deleteIncident(@Args({ name: 'id', type: () => ID }) id: string) {
    try {
      await this.deleteIncidentService.execute(id);
      return {
        status_code: 204,
        description: 'No Content',
        message: 'Incident deleted success',
      };
    } catch {
      throw new InternalServerErrorException();
    }
  }

  @Mutation(() => Incident)
  async createIncident(@Args() args: CreateIncidentArgs) {
    const incident = await this.createIncidentService.execute(args);
    return incident;
  }
}

export default IncidentsResolver;
