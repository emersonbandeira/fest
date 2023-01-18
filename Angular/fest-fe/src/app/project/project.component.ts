import { Component } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../mock-projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  projects = PROJECTS;
  selectedProject?: Project;

  onSelected( project: Project ): void{
    this.selectedProject = project;
  };
}
