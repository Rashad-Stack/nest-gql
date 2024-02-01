import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateEmployeeInput } from "./create-employee.input";

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
  @Field()
  id: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  designation: string;

  @Field({ nullable: true })
  city: string;
}
