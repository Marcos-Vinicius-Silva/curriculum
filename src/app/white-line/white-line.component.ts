import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-white-line',
  imports: [],
  templateUrl: './white-line.component.html',
  styleUrl: './white-line.component.scss',
  standalone: true,
})
export class WhiteLineComponent {
  @Input() color: string = 'default'; // valor padrão

  @HostBinding('class') get colorClass() {
    return this.color;
  }
}
