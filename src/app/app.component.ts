import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SponsorsComponent, ScheduleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'indabaxgabon';
}
