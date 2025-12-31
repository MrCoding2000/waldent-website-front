import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sort-options-container',
  standalone: true,
  imports: [],
  templateUrl: './sort-options-container.html',
  styleUrl: './sort-options-container.scss'
})
export class SortOptionsContainer {
  @Input() sortOptions!: { id: string, label: string } [];
  @Input() selectedSortOption!: string;
}
