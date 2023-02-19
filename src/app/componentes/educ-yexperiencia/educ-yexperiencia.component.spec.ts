import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducYExperienciaComponent } from './educ-yexperiencia.component';

describe('EducYExperienciaComponent', () => {
  let component: EducYExperienciaComponent;
  let fixture: ComponentFixture<EducYExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducYExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducYExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
