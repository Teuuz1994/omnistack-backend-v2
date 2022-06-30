import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
class SuccessDeleteIncident {
  @Field(() => Int, { nullable: false })
  status_code: number;

  @Field({ nullable: false })
  description: string;

  @Field({ nullable: false })
  message: string;
}

export default SuccessDeleteIncident;
