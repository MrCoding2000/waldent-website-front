import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-small-comments-points-box',
  standalone: true,
  imports: [],
  templateUrl: './small-comments-points-box.html',
  styleUrl: './small-comments-points-box.scss'
})
export class SmallCommentsPointsBox {
  @Input() reviewSummary!: {
    totalReviews: number,
    averageRating: number,
    totalVotes: number,
    strengths: string[],
    weaknesses: string[],
    summaryText: string
  };

  getStars(rating: number): number[] {
    return Array.from({length: 5}, (_, i) => i < rating ? 1 : 0);
  }


  getRoundedRating(rating: number): number {
    return Math.round(rating);
  }
}
