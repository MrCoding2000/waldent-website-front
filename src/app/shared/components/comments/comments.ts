import {Component, Input} from '@angular/core';
import {SmallCommentsPointsBox} from '../small-comments-points-box/small-comments-points-box';
import {ReviewsSummaryBox} from '../reviews-summary-box/reviews-summary-box';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    SmallCommentsPointsBox,
    ReviewsSummaryBox
  ],
  templateUrl: './comments.html',
  styleUrl: './comments.scss'
})
export class Comments {
  @Input() reviewSummary!: {
    totalReviews: number,
    averageRating: number,
    totalVotes: number,
    strengths: string[],
    weaknesses: string[],
    summaryText: string
  };

  @Input() reviewSortOptions!: { id: string, label: string } [];
  @Input() selectedSortOption: string = 'mostHelpful';
  @Input() reviews !: {
    id: number,
    userName: string,
    isBuyer: boolean,
    date: string,
    rating: number,
    text: string,
    strengths: string[],
    weaknesses: string[],
    sellerName: string,
    helpfulCount: number,
    notHelpfulCount: number
  }[]

  getStars(rating: number): number[] {
    return Array.from({length: 5}, (_, i) => i < rating ? 1 : 0);
  }
}
