import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateProjectInput } from "./create-project.input";

@InputType()
export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  code: number;
}
