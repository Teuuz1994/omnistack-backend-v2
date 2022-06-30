import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import OngsModule from './modules/ongs/ongs.module';
import IncidensModule from './modules/incidents/incidents.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './src/schema.gql',
      include: [OngsModule, IncidensModule],
      autoTransformHttpErrors: true,
      sortSchema: true,
    }),
    OngsModule,
    IncidensModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
