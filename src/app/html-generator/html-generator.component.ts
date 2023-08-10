import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-html-generator',
  templateUrl: './html-generator.component.html',
  styleUrls: ['./html-generator.component.css']
})
export class HtmlGeneratorComponent implements OnInit{

  reviews: any[] = [];
  selectedReview: string = '';
  surveyContent: any[] = [];
  textColor: string = '#000000';
  bgColor: string = '#ffffff';
  previewHtml: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSurveys().subscribe(data => {
      this.reviews = data.data;
    });
  }

  handleTextColorChange(): void {
    this.updateColorInput('textColor');
    this.generatePreview();
  }

  private updateColorInput(colorVariable: string): void {
    const colorInput = document.getElementById(colorVariable) as HTMLInputElement;
    if (colorInput) {
      colorInput.value = this.textColor;
    }
  }

  generatePreview(): void {
    if (this.selectedReview && (this.textColor || this.bgColor)) {
      const selectedSurveyId = this.reviews.find(review => review.label === this.selectedReview)?.id;
      this.apiService.getSurveyContent(selectedSurveyId).subscribe(data => {
        this.surveyContent = data.data;
      })
    } else {
      this.previewHtml = '';
    }
  }
}
