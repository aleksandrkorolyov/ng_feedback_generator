import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateTextColor, updateBgColor } from '../settings.actions';
import { ApiService } from '../api.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-html-generator',
  templateUrl: './html-generator.component.html',
  styleUrls: ['./html-generator.component.css']
})
export class HtmlGeneratorComponent implements OnInit, OnDestroy {

  private _destroy$ = new Subject();

  reviews: any[] = [];
  selectedReview: string = '';
  surveyContent: any[] = [];
  textColor: string = '#000000';
  bgColor: any = '#ffffff';

  constructor(
    private apiService: ApiService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.apiService.getSurveys()
    .pipe(takeUntil(this._destroy$))
    .subscribe(data => {
      this.reviews = data.data;
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  updateSurveyContent(): void {
    const selectedSurveyId = this.reviews.find(review => review.label === this.selectedReview)?.id;
    this.apiService.getSurveyContent(selectedSurveyId)
    .pipe(takeUntil(this._destroy$))
    .subscribe(data => { 
      this.surveyContent = data.data;
    })
  }

  updateTextColorState(): void {
    this.store.dispatch(updateTextColor({ textColor: this.textColor }));
  }

  updateBgColorState(): void {
    this.store.dispatch(updateBgColor({ bgColor: this.bgColor }));
  }
}
