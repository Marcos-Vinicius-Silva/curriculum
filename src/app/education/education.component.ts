import { Component, OnInit } from '@angular/core';
import { WhiteLineComponent } from '../white-line/white-line.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  standalone: true,
  imports: [WhiteLineComponent],
})
export class EducationComponent implements OnInit {
  ngOnInit(): void {}
  isExpanded: boolean = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
