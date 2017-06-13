import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturedItemComponent } from './home-featured-item.component';

describe('HomeFeaturedItemComponent', () => {
  let component: HomeFeaturedItemComponent;
  let fixture: ComponentFixture<HomeFeaturedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFeaturedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeaturedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
