import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmscoursesComponent } from './cmscourses.component';

describe('CmscoursesComponent', () => {
  let component: CmscoursesComponent;
  let fixture: ComponentFixture<CmscoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmscoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmscoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
