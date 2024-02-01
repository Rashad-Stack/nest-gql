import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PokemonEntity } from "./pokemon.entity";

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(PokemonEntity)
    private readonly pokemonRepository: Repository<PokemonEntity>,
  ) {}

  async findAll(): Promise<PokemonEntity[]> {
    return await this.pokemonRepository.find();
  }

  async findOneById(id: string): Promise<PokemonEntity> {
    const pokemon = await this.pokemonRepository.findOne({
      where: { id },
    });

    if (!pokemon) throw new NotFoundException();

    return pokemon;
  }

  async create(pokemon: PokemonEntity): Promise<PokemonEntity> {
    return await this.pokemonRepository.save(pokemon);
  }

  async update(id: string, pokemon: PokemonEntity): Promise<PokemonEntity> {
    const oldPokemon = await this.findOneById(id);
    await this.pokemonRepository.update(oldPokemon.id, pokemon);
    return await this.findOneById(oldPokemon.id);
  }

  async delete(id: string): Promise<boolean> {
    const pokemon = await this.findOneById(id);
    await this.pokemonRepository.delete(pokemon.id);
    return true;
  }
}
