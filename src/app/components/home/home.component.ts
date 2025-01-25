import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HistoryComponent } from '../history/history.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
