import {Component, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import {SmallCommentsPointsBox} from '../small-comments-points-box/small-comments-points-box';
import {ReviewsSummaryBox} from '../reviews-summary-box/reviews-summary-box';
import {SortOptionsContainer} from '../sort-options-container/sort-options-container';
import {CommentsList} from '../comments-list/comments-list';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    SmallCommentsPointsBox,
    ReviewsSummaryBox,
    SortOptionsContainer,
    CommentsList
  ],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

  /**
   * Set Comment
   */
  onSetComment() {

  }
}
