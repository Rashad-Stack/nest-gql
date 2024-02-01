import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LeagueController } from "./league.controller";
import { LeagueEntity } from "./league.entity";
import { LeagueResolver } from "./league.resolver";
import { LeagueService } from "./league.service";

@Module({
  imports: [TypeOrmModule.forFeature([LeagueEntity])],
  controllers: [LeagueController],
  providers: [LeagueService, LeagueResolver],
})
export class LeagueModule {}
