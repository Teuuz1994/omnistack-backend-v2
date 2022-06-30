import PrismaClientService from '@/shared/prisma/prisma-client-service';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
class DeleteIncidentService {
  constructor(private client: PrismaClientService) { }

  async execute(id: string) {
    if (!id) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Id not provided',
      });
    }

    const incidentsExists = await this.client.incidents.findFirst({
      where: {
        id,
      },
    });

    if (!incidentsExists) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Incident not exists',
      });
    }

    await this.client.incidents.delete({
      where: {
        id: incidentsExists.id,
      },
    });
  }
}

export default DeleteIncidentService;
