import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateTextColor, updateBgColor } from '../settings.actions';
import { selectTextColor, selectBgColor } from '../settings.selectors';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-html-generator',
  templateUrl: './html-generator.component.html',
  styleUrls: ['./html-generator.component.css']
})
export class HtmlGeneratorComponent implements OnInit {

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
    this.apiService.getSurveys().subscribe(data => {
      this.reviews = data.data;
    });
    this.store.select(selectTextColor).subscribe(textColor => {
      this.textColor = textColor;
    });
  
    this.store.select(selectBgColor).subscribe(bgColor => {
      this.bgColor = bgColor;
    });
  }

  updateSurveyContent(): void {
    const selectedSurveyId = this.reviews.find(review => review.label === this.selectedReview)?.id;
    this.apiService.getSurveyContent(selectedSurveyId).subscribe(data => {
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
