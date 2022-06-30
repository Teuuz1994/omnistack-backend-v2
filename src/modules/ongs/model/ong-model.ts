import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export default class Ong {
  @Field(() => ID)
  id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  password: string;

  @Field({ nullable: false })
  whatsapp: string;

  @Field({ nullable: false })
  city: string;

  @Field({ nullable: false })
  uf: string;
}
