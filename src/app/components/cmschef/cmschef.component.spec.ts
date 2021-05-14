import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmschefComponent } from './cmschef.component';

describe('CmschefComponent', () => {
  let component: CmschefComponent;
  let fixture: ComponentFixture<CmschefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmschefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmschefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
