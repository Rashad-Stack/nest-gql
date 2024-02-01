import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LeagueEntity } from "src/league/league.entity";
import { PokemonEntity } from "./pokemon.entity";
import { PokemonResolver } from "./pokemon.resolver";
import { PokemonService } from "./pokemon.service";

@Module({
  imports: [TypeOrmModule.forFeature([PokemonEntity, LeagueEntity])],
  providers: [PokemonService, PokemonResolver],
  controllers: [],
})
export class PokemonModule {}
