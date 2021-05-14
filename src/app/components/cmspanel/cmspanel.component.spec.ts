import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmspanelComponent } from './cmspanel.component';

describe('CmspanelComponent', () => {
  let component: CmspanelComponent;
  let fixture: ComponentFixture<CmspanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmspanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
