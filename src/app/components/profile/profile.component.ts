import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  public user = {
    photo: 'https://www.w3schools.com/howto/img_avatar.png',
    name: 'Juan Pérez',
    id: '12345',
    username: 'juanperez',
    email: 'juan.perez@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
}
