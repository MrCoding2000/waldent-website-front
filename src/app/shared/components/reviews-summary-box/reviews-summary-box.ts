import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-reviews-summary-box',
  standalone: true,
  imports: [],
  templateUrl: './reviews-summary-box.html',
  styleUrl: './reviews-summary-box.scss'
})
export class ReviewsSummaryBox {
  @Input() reviewSummary!: {
    totalReviews: number,
    averageRating: number,
    totalVotes: number,
    strengths: string[],
    weaknesses: string[],
    summaryText: string
  };
}
