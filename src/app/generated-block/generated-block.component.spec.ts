import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedBlockComponent } from './generated-block.component';

describe('GeneratedBlockComponent', () => {
  let component: GeneratedBlockComponent;
  let fixture: ComponentFixture<GeneratedBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratedBlockComponent]
    });
    fixture = TestBed.createComponent(GeneratedBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
