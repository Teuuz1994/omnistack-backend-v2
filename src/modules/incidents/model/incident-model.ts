import Ong from '@/modules/ongs/model/ong-model';
import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
class Incident {
  @Field(() => ID)
  id: string;

  @Field({ nullable: false })
  title: string;

  @Field({ nullable: false })
  description: string;

  @Field(() => Float)
  value: string;

  @Field({ nullable: false })
  ong_id: string;

  @Field(() => Ong)
  ong: Ong;
}

export default Incident;
