import {Component, Input} from '@angular/core';
import {SortOptionsContainer} from '../sort-options-container/sort-options-container';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-questions-list',
  standalone: true,
  imports: [
    SortOptionsContainer,
    NgClass
  ],
  templateUrl: './questions-list.html',
  styleUrl: './questions-list.scss'
})
export class QuestionsList {
  @Input() questionsList!: {
    id: number,
    userName: string,
    date: string,
    question: string,
    answers: {
      id: number,
      userName: string,
      date: string,
      text: string,
      helpfulCount: number,
      notHelpfulCount: number,
      isOfficial: boolean
    }[]
  }[];
  questionSortOptions = [
    {id: 'newest', label: 'جدیدترین'},
    {id: 'mostAnswered', label: 'بیشترین پاسخ'}
  ];
  selectedQuestionSort: string = 'newest';
}
