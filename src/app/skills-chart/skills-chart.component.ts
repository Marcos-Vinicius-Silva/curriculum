import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-chart.component.html',
  styleUrls: ['./skills-chart.component.scss'],
})
export class SkillsChartComponent {
  skills = [
    { label: 'Javascript', logo: 'js', percentage: 75, color: '#FF6384' },
    { label: 'Typescript', logo: 'ts', percentage: 80, color: '#FF9F40' },
    { label: '.Net C#', logo: 'dot', percentage: 80, color: '#FF9F40' },
    { label: 'Node', logo: 'node', percentage: 80, color: '#FF9F40' },
    { label: 'React', logo: 'react', percentage: 80, color: '#FF9F40' },
    {
      label: 'React Native',
      logo: 'react-native',
      percentage: 80,
      color: '#FF9F40',
    },
  ];

  getStrokeDashArray(percentage: number): string {
    const circumference = 2 * Math.PI * 15.9155;
    const filled = (circumference * percentage) / 100;
    return `${filled} ${circumference - filled}`;
  }
}
