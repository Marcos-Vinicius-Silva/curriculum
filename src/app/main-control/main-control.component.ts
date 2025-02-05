import { Component } from '@angular/core';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { EducationComponent } from '../education/education.component';
import { SkillsChartComponent } from '../skills-chart/skills-chart.component';

@Component({
  selector: 'app-main-control',
  imports: [ExperiencesComponent, EducationComponent, SkillsChartComponent],
  templateUrl: './main-control.component.html',
  standalone: true,
  styleUrls: ['./main-control.component.scss'],
})
export class MainControlComponent {
  constructor() {
    console.log('Oi seu curioso '); // Corrigido
  }
}
