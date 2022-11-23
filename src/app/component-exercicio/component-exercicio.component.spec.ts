import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExercicioComponent } from './component-exercicio.component';

describe('ComponentExercicioComponent', () => {
  let component: ComponentExercicioComponent;
  let fixture: ComponentFixture<ComponentExercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentExercicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
