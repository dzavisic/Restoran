import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsmenuComponent } from './cmsmenu.component';

describe('CmsmenuComponent', () => {
  let component: CmsmenuComponent;
  let fixture: ComponentFixture<CmsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
