import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PokemonController } from "./pokemon.controller";
import { PokemonResolver } from "./pokemon.resolver";
import { PokemonService } from "./pokemon.service";

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [PokemonService, PokemonResolver],
  controllers: [PokemonController],
})
export class PokemonModule {}
