import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserDto } from '../models/user.dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public userData = new BehaviorSubject<UserDto | null>(null); // Subject para almacenar los datos del usuario
  userData$ = this.userData.asObservable();
  constructor() {}

  setUserData(data: UserDto): void {
    this.userData.next(data);
  }

  getUserData(): UserDto | null {
    return this.userData.getValue();
  }

  clearUserData(): void {
    this.userData.next(null);
  }

  validate(user: UserDto): { status: number; message: string } {
    if (user.usuario === 'admin' && user.contrasena === 'admin123') {
      this.setUserData(user);
      return { status: 200, message: 'Login exitoso' };
    } else {
      return { status: 401, message: 'Usuario y/o contraseña inválidos' };
    }
  }
}
