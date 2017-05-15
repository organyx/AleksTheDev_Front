import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/map';

import { Project } from 'app/projects/project.model';
import { ProjectsService } from 'app/projects/projects.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit, OnDestroy {
  projectForm: FormGroup;
  private projectIndex: string;
  private subscription: Subscription;
  private project: Project;
  private isNew = true;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')) {
          this.isNew = false;
          this.projectIndex = params['id'];
          // this.projectService.getProject(this.projectIndex).subscribe(data => this.project);
          // this.project = this.projectService.getProject(this.projectIndex);
          // console.log('ProjectNewComponent', this.projectIndex);
          this.projectService.getProjectAPI(this.projectIndex)
            .subscribe(
              project => this.project = project,
              error => this.errorMessage = <any>error,
              () => {
                // console.log('ProjectNewComponent', this.project);
                this.initForm();
              }
            );
        } else {
          this.isNew = true;
          this.project = null;
          this.initForm();
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {
    let projectName = '';
    let projectImageUrls = [];
    let projectDescription = '';
    let projectStatus = 'active';

    if(!this.isNew) {
      console.log(this.project);
      projectName = this.project.name;
      projectImageUrls = this.project.imageUrls;
      projectDescription = this.project.description;
      projectStatus = this.project.status;
    }

      this.projectForm = this.formBuilder.group({
        name: [projectName, Validators.required],
        status: [projectStatus],
        imageUrls: [projectImageUrls],
        description: [projectDescription, Validators.required]
      });
  }

  onSubmit() {
    const newPrj = this.projectForm.value;
    if(this.isNew) {
      // this.projectService.addProject(newPrj);
      this.projectService.addProjectAPI(newPrj)
            .subscribe(
              project => this.project = project,
              error => this.errorMessage = <any>error,
              () => console.log('ProjectNewComponent', this.project)
            );
    } else {
      // this.projectService.editProject(this.project, newPrj);
      //
      this.projectService.editProjectAPI(this.projectIndex, newPrj)
            .subscribe(
              project => this.project = project,
              error => this.errorMessage = <any>error,
              () => console.log('ProjectNewComponent', this.project)
            );
      //
    }
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['../projects']);
  }

  onCancel() {
    // this.navigateBack();
    this.router.navigate(['../projects', this.projectIndex]);
  }

}
