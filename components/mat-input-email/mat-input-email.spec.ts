import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputEmail } from './mat-input-email';

describe('MatInputEmail', () => {
  let component: MatInputEmail;
  let fixture: ComponentFixture<MatInputEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputEmail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatInputEmail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
