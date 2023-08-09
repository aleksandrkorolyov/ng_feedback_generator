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

}
