import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PokemonInputDto, PokemonUpdateInputDto } from "./pokemon.dto";
import { PokemonEntity } from "./pokemon.entity";
import { PokemonService } from "./pokemon.service";

@Resolver()
export class PokemonResolver {
  constructor(private readonly pokemonService: PokemonService) {}

  // Queries
  @Query(() => [PokemonEntity])
  async pokemons() {
    return await this.pokemonService.findAll();
  }

  @Query(() => PokemonEntity)
  async pokemon(@Args("id") id: string) {
    return await this.pokemonService.findOneById(id);
  }

  // Mutations
  @Mutation(() => PokemonEntity)
  async createPokemon(@Args("pokemon") pokemon: PokemonInputDto) {
    return await this.pokemonService.create(pokemon);
  }

  @Mutation()
  async updatePokemon(
    @Args("id") id: string,
    @Args("pokemon") pokemon: PokemonUpdateInputDto,
  ) {
    await this.pokemonService.update(id, pokemon);
  }

  @Mutation()
  async deletePokemon(@Args("id") id: string) {
    await this.pokemonService.delete(id);
  }
  // Subscriptions
  // Field Resolvers
  // Resolver Methods
}
