import { Field, ObjectType } from "@nestjs/graphql";
import { Category } from "src/category/entities/category.entity";
import { Project } from "src/project/entities/project.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Employee {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  firstname: string;

  @Field()
  @Column()
  lastname: string;

  @Field()
  @Column()
  designation: string;

  @Field()
  @Column()
  city: string;

  @ManyToOne(() => Project, (project) => project.employees)
  @Field(() => Project, { nullable: true })
  project: Project;

  @Field({ nullable: true })
  @Column({ nullable: true })
  projectId: string;

  @OneToMany(() => Category, (category) => category.employee)
  @Field(() => [Category], { nullable: true })
  categories: Category[];
}
