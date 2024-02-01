import { Field, InputType } from "@nestjs/graphql";
import { MaxLength, MinLength } from "class-validator";

@InputType()
export class LeagueInputDto {
  @MinLength(2)
  @MaxLength(400)
  @Field()
  name: string;
}

@InputType()
export class LeagueUpdateInputDto {
  @MinLength(2)
  @MaxLength(400)
  @Field()
  name?: string;
}
