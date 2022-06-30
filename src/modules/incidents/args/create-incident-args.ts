import { ArgsType, Field, Float } from '@nestjs/graphql';

@ArgsType()
export default class CreateIncidentArgs {
  @Field({ nullable: false })
  title: string;

  @Field({ nullable: false })
  description: string;

  @Field(() => Float)
  value: number;

  @Field({ nullable: false })
  ong_id: string;
}
