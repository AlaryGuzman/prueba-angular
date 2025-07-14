import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mat-input-email',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './mat-input-email.html',
  styleUrls: ['./mat-input-email.css'],
})
export class MatInputEmailComponent {
  loginForm: FormGroup;
  active = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        ]
      ]
    });
  }

  onSubmit(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.loginForm.valid) {
      console.log('Datos enviados:', this.loginForm.value);

      this.successMessage = 'Inicio de sesión exitoso. Redirigiendo...';

      setTimeout(() => {
        window.location.href = 'https://alaryguzman.github.io/PaginaLogin/';
      }, 1000); 
    } else {
      this.loginForm.markAllAsTouched();
      this.errorMessage = 'Por favor, corrige los errores del formulario.';
    }
  }

  activate() {
    this.active = true;
  }
}




