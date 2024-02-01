import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { PokemonUpdateInputDto } from "./pokemon.dto";
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
  async createPokemon(
    @Args("name") name,
    @Args("type") type,
    @Args("pokedex") pokedex,
  ) {
    return await this.pokemonService.create({ name, type, pokedex });
  }

  @Mutation(() => PokemonEntity)
  async assign(@Args("id") id: string, @Args("leagueId") leagueId: string) {
    return await this.pokemonService.assignLeague(id, leagueId);
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
