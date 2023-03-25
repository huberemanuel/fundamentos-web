import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroExibicaoComponent } from './carro-exibicao.component';

describe('CarroExibicaoComponent', () => {
  let component: CarroExibicaoComponent;
  let fixture: ComponentFixture<CarroExibicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroExibicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroExibicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
