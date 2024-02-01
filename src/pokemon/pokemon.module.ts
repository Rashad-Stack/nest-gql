import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PokemonController } from "./pokemon.controller";
import { PokemonEntity } from "./pokemon.entity";
import { PokemonResolver } from "./pokemon.resolver";
import { PokemonService } from "./pokemon.service";

@Module({
  imports: [TypeOrmModule.forFeature([PokemonEntity])],
  providers: [PokemonService, PokemonResolver],
  controllers: [PokemonController],
})
export class PokemonModule {}
