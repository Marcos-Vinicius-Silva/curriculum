import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-white-line',
  standalone: true,
  imports: [],
  templateUrl: './white-line.component.html',
  styleUrl: './white-line.component.scss',
})
export class WhiteLineComponent {
  @Input() color: string = 'default'; // valor padrão

  @HostBinding('class') get colorClass() {
    console.log(this.color);
    return this.color;
  }
}
