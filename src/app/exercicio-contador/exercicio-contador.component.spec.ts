import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioContadorComponent } from './exercicio-contador.component';

describe('ExercicioContadorComponent', () => {
  let component: ExercicioContadorComponent;
  let fixture: ComponentFixture<ExercicioContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioContadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
