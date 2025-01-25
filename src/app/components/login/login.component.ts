import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginForm: FormGroup;
  public hasErrors: boolean = false;
  public succesLogin: boolean = false;
  public showValiadtions: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginService.clearUserData();
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      tipoDocumento: ['Cédula de Ciudadanía', Validators.required],
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    this.showValiadtions = true;
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.loginService.userData.next(formData);
      const response = this.loginService.validate(formData);
      this.hasErrors = false;
      if (response.status === 200) {
        this.succesLogin = false;
        this.showValiadtions = false;
        this.router.navigateByUrl('/home');
      } else {
        this.succesLogin = true;
      }
    } else {
      this.hasErrors = true;
    }
  }

  getCtrlErr(name: string, err: string): boolean {
    return this.loginForm?.get(name)?.hasError(err) as boolean;
  }
}
