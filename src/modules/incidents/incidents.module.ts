import PrismaClientService from '@/shared/prisma/prisma-client-service';
import { Module } from '@nestjs/common';
import IncidentsResolver from './resolvers/incidents-resolvers';
import CreateIncidentService from './service/create-incident-service';
import DeleteIncidentService from './service/delete-incident-service';

@Module({
  providers: [
    PrismaClientService,
    DeleteIncidentService,
    CreateIncidentService,
    IncidentsResolver,
  ],
})
class IncidensModule { }

export default IncidensModule;
