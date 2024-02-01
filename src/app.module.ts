import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { CategoryModule } from "./category/category.module";
import { Category } from "./category/entities/category.entity";
import { EmployeeModule } from "./employee/employee.module";
import { Employee } from "./employee/entities/employee.entity";
import { Project } from "./project/entities/project.entity";
import { ProjectModule } from "./project/project.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      logging: true,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Employee, Project, Category],
      synchronize: true,
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      include: [],
      context: ({ req }) => ({ headers: req.headers }),

      // Code first
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,

      // Schema First
      // typePaths: ["./**/*.graphql"],
      // definitions: {
      //   path: join(process.cwd(), "src/graphql.schema.ts"),
      //   outputAs: "class",
      // },
    }),

    CategoryModule,

    ProjectModule,

    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
