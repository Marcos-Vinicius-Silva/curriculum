import { Component } from '@angular/core';
import { LeftContainerComponent } from './left-container/left-container.component';
import { MainControlComponent } from './main-control/main-control.component';

@Component({
  selector: 'app-root',
  imports: [LeftContainerComponent, MainControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'curriculum';
}
