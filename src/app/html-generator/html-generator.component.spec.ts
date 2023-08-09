import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlGeneratorComponent } from './html-generator.component';

describe('HtmlGeneratorComponent', () => {
  let component: HtmlGeneratorComponent;
  let fixture: ComponentFixture<HtmlGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlGeneratorComponent]
    });
    fixture = TestBed.createComponent(HtmlGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
