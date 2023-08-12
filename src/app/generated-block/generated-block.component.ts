import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTextColor, selectBgColor } from '../settings.selectors';

@Component({
  selector: 'app-generated-block',
  templateUrl: './generated-block.component.html',
  styleUrls: ['./generated-block.component.css']
})
export class GeneratedBlockComponent {
  @Input() surveyContent: any[] = [];

  textColor: string = '';
  bgColor: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectTextColor).subscribe(textColor => {
      this.textColor = textColor;
    });

    this.store.select(selectBgColor).subscribe(bgColor => {
      this.bgColor = bgColor;
    });
  }

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
