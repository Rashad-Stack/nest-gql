import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LeagueModule } from "./league/league.module";
import { PokemonModule } from "./pokemon/pokemon.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "postgres",
      port: 5432,
      username: "postgres",
      password: "8924",
      database: "api",
      entities: [__dirname + "/../**/*.entity{.ts,.js}"],
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
