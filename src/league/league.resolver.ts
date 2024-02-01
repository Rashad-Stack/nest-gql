import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LeagueEntity } from "./league.entity";
import { LeagueService } from "./league.service";

@Resolver()
export class LeagueResolver {
  constructor(private readonly leagueService: LeagueService) {}
  // Queries
  @Query(() => [LeagueEntity])
  async leagues() {
    return await this.leagueService.findAll();
  }

  @Query(() => LeagueEntity)
  async league(@Args("id") id: string) {
    return await this.leagueService.findOneById(id);
  }

  // Mutations
  @Mutation(() => LeagueEntity)
  async createLeague(@Args("name") name: string) {
    return await this.leagueService.create({ name });
  }

  @Mutation(() => LeagueEntity)
  async updateLeague(@Args("id") id: string, @Args("name") name: string) {
    return await this.leagueService.update(id, { name });
  }

  @Mutation(() => Boolean)
  async deleteLeague(@Args("id") id: string) {
    return await this.leagueService.delete(id);
  }
  // Subscriptions
  // Field Resolvers
  // Resolver Methods
}
