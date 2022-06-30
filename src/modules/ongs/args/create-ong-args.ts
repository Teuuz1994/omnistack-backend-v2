import { ArgsType, Field } from '@nestjs/graphql';
import { MaxLength, IsEmail } from 'class-validator';

@ArgsType()
export default class CreateOngArgs {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  @IsEmail()
  email: string;

  @Field({ nullable: false })
  password: string;

  @Field({ nullable: false })
  whatsapp: string;

  @Field({ nullable: false })
  city: string;

  @Field({ nullable: false })
  @MaxLength(2)
  uf: string;
}
