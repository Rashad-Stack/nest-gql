import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProjectInput } from "./dto/create-project.input";
import { UpdateProjectInput } from "./dto/update-project.input";
import { Project } from "./entities/project.entity";

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}
  async create(createProjectInput: CreateProjectInput): Promise<Project> {
    return await this.projectRepository.save(createProjectInput);
  }

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async findOne(id: string): Promise<Project> {
    const project = await this.projectRepository.findOne({ where: { id } });
    if (!project) {
      throw new NotFoundException(`Project #${id} not found`);
    }
    return project;
  }

  async update(
    id: string,
    updateProjectInput: UpdateProjectInput,
  ): Promise<Project> {
    const project = await this.findOne(id);
    await this.projectRepository.update(project.id, updateProjectInput);
    await this.projectRepository.save(project);
    return await this.findOne(project.id);
  }

  async remove(id: string): Promise<boolean> {
    const project = await this.findOne(id);
    await this.projectRepository.delete(project.id);
    return true;
  }
}
