import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
    
}
