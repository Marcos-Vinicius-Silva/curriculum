import { Component, OnInit } from '@angular/core';
import { WhiteLineComponent } from '../white-line/white-line.component';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  imports: [WhiteLineComponent],
})
export class EducationComponent implements OnInit {
  ngOnInit(): void {}
  isExpanded: boolean = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
