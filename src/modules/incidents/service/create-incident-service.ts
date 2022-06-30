import { Injectable } from '@nestjs/common';

import PrismaClientService from '@/shared/prisma/prisma-client-service';
import CreateIncidentDTO from '../dto/create-incident-input';
import generateUniqueId from '@/utils/generate-unique-id';

@Injectable()
class CreateIncidentService {
  constructor(private client: PrismaClientService) { }

  async execute(input: CreateIncidentDTO) {
    const id = generateUniqueId();

    const incident = await this.client.incidents.create({
      data: {
        ...input,
        id,
      },
    });

    return incident;
  }
}

export default CreateIncidentService;
