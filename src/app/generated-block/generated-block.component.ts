import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectTextColor, selectBgColor } from '../settings.selectors';

@Component({
  selector: 'app-generated-block',
  templateUrl: './generated-block.component.html',
  styleUrls: ['./generated-block.component.css']
})
export class GeneratedBlockComponent implements OnInit, OnDestroy{

  private _destroy$ = new Subject();

  @Input() surveyContent: any[] = [];

  textColor: string = '';
  bgColor: string = '';

  constructor(private store: Store) {}

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  ngOnInit(): void {
    this.store.select(selectTextColor)
    .pipe(takeUntil(this._destroy$))
    .subscribe(textColor => {
      this.textColor = textColor;
    });

    this.store.select(selectBgColor)
    .pipe(takeUntil(this._destroy$))
    .subscribe(bgColor => {
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
