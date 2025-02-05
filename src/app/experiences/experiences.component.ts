import { Component, OnInit } from '@angular/core';
import { WhiteLineComponent } from '../white-line/white-line.component';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [WhiteLineComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent implements OnInit {
  startDate = new Date(2022, 11, 1); // Dezembro de 2022 (mês começa do 0, então 11 = dezembro)
  experienceTime!: string;
  isExpanded: boolean = false;

  ngOnInit() {
    this.calculateExperienceTime();
  }

  calculateExperienceTime() {
    const now = new Date();
    let years = now.getFullYear() - this.startDate.getFullYear();
    let months = now.getMonth() - this.startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    this.experienceTime = `${years} anos ${months} meses`;
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
