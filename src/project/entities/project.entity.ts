import { Field, ObjectType } from "@nestjs/graphql";
import { Employee } from "src/employee/entities/employee.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Project {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  code: number;

  @OneToMany(() => Employee, (employee) => employee.project)
  @Field(() => [Project], { nullable: true })
  employees: Employee[];
}
