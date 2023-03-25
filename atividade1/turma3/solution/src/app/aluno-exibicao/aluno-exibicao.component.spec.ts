import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoExibicaoComponent } from './aluno-exibicao.component';

describe('AlunoExibicaoComponent', () => {
  let component: AlunoExibicaoComponent;
  let fixture: ComponentFixture<AlunoExibicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoExibicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoExibicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
