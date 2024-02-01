import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LeagueInputDto, LeagueUpdateInputDto } from "./league.dto";
import { LeagueEntity } from "./league.entity";

@Injectable()
export class LeagueService {
  constructor(
    @InjectRepository(LeagueEntity)
    private readonly leagueRepository: Repository<LeagueEntity>,
  ) {}

  async findAll(): Promise<LeagueEntity[]> {
    return await this.leagueRepository.find();
  }

  async findOneById(id: string): Promise<LeagueEntity> {
    const league = await this.leagueRepository.findOne({ where: { id } });

    if (!league) throw new NotFoundException();

    return league;
  }

  async create(league: LeagueInputDto): Promise<LeagueEntity> {
    return await this.leagueRepository.save(league);
  }

  async update(
    id: string,
    league: LeagueUpdateInputDto,
  ): Promise<LeagueEntity> {
    const oldLeague = await this.findOneById(id);
    await this.leagueRepository.update(oldLeague.id, league);
    return await this.findOneById(oldLeague.id);
  }

  async delete(id: string): Promise<boolean> {
    const league = await this.findOneById(id);
    await this.leagueRepository.delete(league.id);
    return true;
  }
}
