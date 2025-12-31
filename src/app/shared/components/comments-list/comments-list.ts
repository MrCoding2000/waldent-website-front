import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [],
  templateUrl: './comments-list.html',
  styleUrl: './comments-list.scss'
})
export class CommentsList {
  @Input() commentsList !: {
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
  }[];

  getStars(rating: number): number[] {
    return Array.from({length: 5}, (_, i) => i < rating ? 1 : 0);
  }
}
