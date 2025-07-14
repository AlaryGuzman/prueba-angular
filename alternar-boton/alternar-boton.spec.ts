import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternarBoton } from './alternar-boton';

describe('AlternarBoton', () => {
  let component: AlternarBoton;
  let fixture: ComponentFixture<AlternarBoton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternarBoton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternarBoton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
