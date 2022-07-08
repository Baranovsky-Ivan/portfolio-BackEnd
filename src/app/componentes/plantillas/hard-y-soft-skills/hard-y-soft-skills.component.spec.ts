import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardYSoftSkillsComponent } from './hard-y-soft-skills.component';

describe('HardYSoftSkillsComponent', () => {
  let component: HardYSoftSkillsComponent;
  let fixture: ComponentFixture<HardYSoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardYSoftSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardYSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
