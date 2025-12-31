import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsSummaryBox } from './reviews-summary-box';

describe('ReviewsSummaryBox', () => {
  let component: ReviewsSummaryBox;
  let fixture: ComponentFixture<ReviewsSummaryBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsSummaryBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsSummaryBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
