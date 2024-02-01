import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LeagueEntity } from "./league/league.entity";
import { LeagueModule } from "./league/league.module";
import { PokemonEntity } from "./pokemon/pokemon.entity";
import { PokemonModule } from "./pokemon/pokemon.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [PokemonEntity, LeagueEntity],
      synchronize: true,
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      include: [],
      context: ({ req }) => ({ headers: req.headers }),

      // Schema First
      // autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      // sortSchema: true,

      // Code first
      typePaths: ["./**/*.graphql"],
      definitions: {
        path: join(process.cwd(), "src/graphql.schema.ts"),
        outputAs: "class",
      },
    }),

    PokemonModule,

    LeagueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
