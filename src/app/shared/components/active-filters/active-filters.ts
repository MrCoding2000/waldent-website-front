import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-active-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-filters.html',
  styleUrl: './active-filters.scss'
})
export class ActiveFilters {
  @Input() activeFilters: string[] = [];
  @Output() removeFilter = new EventEmitter<string>();
  @Output() removeAllFilters = new EventEmitter<void>();

  onRemoveFilter(filter: string) {
    this.removeFilter.emit(filter);
  }

  onRemoveAllFilters() {
    this.removeAllFilters.emit();
  }
}

