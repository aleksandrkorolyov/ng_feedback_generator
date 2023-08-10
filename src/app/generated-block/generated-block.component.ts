import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generated-block',
  templateUrl: './generated-block.component.html',
  styleUrls: ['./generated-block.component.css']
})
export class GeneratedBlockComponent {
  @Input() textColor: string = '#000000';
  @Input() bgColor: string = '#ffffff';
  @Input() surveyContent: any[] = [];

  getScoreBackgroundColor(score: number): string {
    if (score >= 0 && score <= 3) {
      return '#ff0000';
    } else if (score >= 4 && score <= 6) {
      return '#ff9214';
    } else if (score >= 7 && score <= 10) {
      return '#69d100';
    } else {
      return 'transparent';
    }
  }

}
