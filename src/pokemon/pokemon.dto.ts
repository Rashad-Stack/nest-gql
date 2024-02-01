import { Field, InputType } from "@nestjs/graphql";
import { MaxLength, MinLength } from "class-validator";

@InputType()
export class PokemonInputDto {
  @MinLength(2)
  @MaxLength(400)
  @Field()
  name: string;

  @MinLength(2)
  @MaxLength(400)
  @Field()
  type: string;

  @Field()
  leagueId: string;
}

@InputType()
export class PokemonUpdateInputDto {
  @MinLength(2)
  @MaxLength(400)
  @Field()
  name?: string;

  @MinLength(2)
  @MaxLength(400)
  @Field()
  type?: string;

  @Field()
  leagueId?: string;
}
