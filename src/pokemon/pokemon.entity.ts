import { LeagueEntity } from "src/league/league.entity";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("pokemon")
export class PokemonEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 500, unique: true })
  name: string;

  @Column("varchar", { length: 500 })
  type: string;

  @Column("numeric")
  pokedex: number;

  @ManyToOne(() => LeagueEntity, (league) => league.pokemons, { eager: true })
  league: LeagueEntity;
}
