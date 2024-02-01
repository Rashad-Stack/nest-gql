import { Module } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";
import { PokemonResolver } from "./pokemon.resolver";
import { PokemonController } from "./pokemon.controller";

@Module({
  providers: [PokemonService, PokemonResolver],
  controllers: [PokemonController],
})
export class PokemonModule {}
