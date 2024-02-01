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

  @Column("varchar", { length: 500, nullable: false, unique: true })
  name: string;

  @Column("varchar", { length: 500, nullable: false })
  type: string;

  @ManyToOne(() => LeagueEntity, (league) => league.pokemons)
  league: LeagueEntity;
}
