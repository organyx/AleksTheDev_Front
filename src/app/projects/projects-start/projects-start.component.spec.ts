import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsStartComponent } from './projects-start.component';

describe('ProjectsStartComponent', () => {
  let component: ProjectsStartComponent;
  let fixture: ComponentFixture<ProjectsStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
