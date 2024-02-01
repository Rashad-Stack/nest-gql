import { Field, ObjectType } from "@nestjs/graphql";
import { Employee } from "src/employee/entities/employee.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Category {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @ManyToOne(() => Employee, (employee) => employee.categories)
  @Field(() => Employee)
  employee: Employee;

  @Field({ nullable: true })
  @Column({ nullable: true })
  employeeId: string;
}
