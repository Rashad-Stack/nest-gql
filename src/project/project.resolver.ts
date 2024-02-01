import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateProjectInput } from "./dto/create-project.input";
import { UpdateProjectInput } from "./dto/update-project.input";
import { Project } from "./entities/project.entity";
import { ProjectService } from "./project.service";

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project)
  createProject(
    @Args("createProjectInput") createProjectInput: CreateProjectInput,
  ) {
    return this.projectService.create(createProjectInput);
  }

  @Query(() => [Project], { name: "project" })
  findAll() {
    return this.projectService.findAll();
  }

  @Query(() => Project, { name: "project" })
  findOne(@Args("id", { type: () => Int }) id: string) {
    return this.projectService.findOne(id);
  }

  @Mutation(() => Project)
  updateProject(
    @Args("updateProjectInput") updateProjectInput: UpdateProjectInput,
  ) {
    return this.projectService.update(
      updateProjectInput.id,
      updateProjectInput,
    );
  }

  @Mutation(() => Project)
  removeProject(@Args("id", { type: () => Int }) id: string) {
    return this.projectService.remove(id);
  }
}
