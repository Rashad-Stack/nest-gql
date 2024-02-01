import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LeagueEntity } from "./league.entity";
import { LeagueResolver } from "./league.resolver";
import { LeagueService } from "./league.service";

@Module({
  imports: [TypeOrmModule.forFeature([LeagueEntity])],
  controllers: [],
  providers: [LeagueService, LeagueResolver],
})
export class LeagueModule {}
