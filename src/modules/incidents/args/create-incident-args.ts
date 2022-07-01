import { ArgsType, Field, Float, ID } from '@nestjs/graphql';

@ArgsType()
export default class CreateIncidentArgs {
  @Field({ nullable: false })
  title: string;

  @Field({ nullable: false })
  description: string;

  @Field(() => Float)
  value: number;

  @Field(() => ID)
  ong_id: string;
}
