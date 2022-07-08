import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarQuitarComponent } from './agregar-quitar.component';

describe('AgregarQuitarComponent', () => {
  let component: AgregarQuitarComponent;
  let fixture: ComponentFixture<AgregarQuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarQuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarQuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
