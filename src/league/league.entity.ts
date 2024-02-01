import { PokemonEntity } from "src/pokemon/pokemon.entity";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("league")
export class LeagueEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 500, nullable: false, unique: true })
  name: string;

  @OneToMany(() => PokemonEntity, (pokemon) => pokemon.league)
  pokemons: PokemonEntity[];
}
