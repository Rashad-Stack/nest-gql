import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEmployeeInput } from "./dto/create-employee.input";
import { UpdateEmployeeInput } from "./dto/update-employee.input";
import { Employee } from "./entities/employee.entity";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}
  async create(createEmployeeInput: CreateEmployeeInput): Promise<Employee> {
    return await this.employeeRepository.save(createEmployeeInput);
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  async findOne(id: string): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({ where: { id } });
    if (!employee) {
      throw new NotFoundException(`Employee #${id} not found`);
    }
    return employee;
  }

  async update(
    id: string,
    updateEmployeeInput: UpdateEmployeeInput,
  ): Promise<Employee> {
    const employee = await this.findOne(id);
    await this.employeeRepository.update(employee.id, updateEmployeeInput);
    return await this.findOne(employee.id);
  }

  async remove(id: string): Promise<boolean> {
    const employee = await this.findOne(id);
    await this.employeeRepository.delete({ id: employee.id });
    return true;
  }
}
