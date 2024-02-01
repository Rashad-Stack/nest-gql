import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateEmployeeInput } from "./dto/create-employee.input";
import { UpdateEmployeeInput } from "./dto/update-employee.input";
import { EmployeeService } from "./employee.service";
import { Employee } from "./entities/employee.entity";

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Mutation(() => Employee)
  createEmployee(
    @Args("createEmployeeInput") createEmployeeInput: CreateEmployeeInput,
  ) {
    return this.employeeService.create(createEmployeeInput);
  }

  @Query(() => [Employee], { name: "employees" })
  findAll() {
    return this.employeeService.findAll();
  }

  @Query(() => Employee, { name: "employee" })
  findOne(@Args("id") id: string) {
    return this.employeeService.findOne(id);
  }

  @Mutation(() => Employee)
  updateEmployee(
    @Args("updateEmployeeInput") updateEmployeeInput: UpdateEmployeeInput,
  ) {
    return this.employeeService.update(
      updateEmployeeInput.id,
      updateEmployeeInput,
    );
  }

  @Mutation(() => Employee)
  removeEmployee(@Args("id") id: string) {
    return this.employeeService.remove(id);
  }
}
