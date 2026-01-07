import { Component, Inject, OnDestroy, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TechnicianFilter } from '../technician-filter/technician-filter';

@Component({
  selector: 'app-technicians-breadcrumb',
  standalone: true,
  imports: [CommonModule, FormsModule, TechnicianFilter],
  templateUrl: './technicians-breadcrumb.html',
  styleUrl: './technicians-breadcrumb.scss'
})
export class TechniciansBreadcrumb implements AfterViewInit, OnDestroy {
  @Input() activeFilters: string[] = [];
  @Output() removeFilter = new EventEmitter<string>();
  @Output() removeAllFilters = new EventEmitter<void>();
  @ViewChild('mobileFilterComponent') mobileFilterComponent?: TechnicianFilter;
  
  isSidebarOpen = false;
  isFilterSidebarOpen = false;
  private lockedScrollY = 0;

  specialOffers = false;
  mostPopular = false;
  highestRating = false;

  categories = [
    { name: 'ابزارهای اندودنتیک', icon: 'endodontic' },
    { name: 'یونیت و صندلی دندانپزشکی', icon: 'chair' },
    { name: 'توربین و میکروموتور', icon: 'handpiece' },
    { name: 'ابزارهای جراحی', icon: 'surgical' },
    { name: 'مواد قالب گیری', icon: 'impression' },
    { name: 'لوازم ارتودنسی', icon: 'orthodontic' },
    { name: 'استریلیزاسیون و کنترل عفونت', icon: 'sterilization' },
    { name: 'مصرفی ها و یک بار مصرفها', icon: 'disposable' },
    { name: 'مواد پروتز دندانی', icon: 'prosthesis' },
    { name: 'ابزارهای تشخیصی', icon: 'diagnostic' },
    { name: 'تجهیزات و لوازم آزمایشگاهی', icon: 'lab' }
  ];

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngAfterViewInit() {
    // Sync active filters when mobile filter component is available
    if (this.mobileFilterComponent) {
      // The filter component will emit activeFiltersChange when initialized
    }
  }

  openSidebar() {
    this.isSidebarOpen = true;
    this.updateBodyScrollLock();
  }

  closeSidebar() {
    this.isSidebarOpen = false;
    this.updateBodyScrollLock();
  }

  openFilterSidebar() {
    this.isFilterSidebarOpen = true;
    this.updateBodyScrollLock();
  }

  closeFilterSidebar() {
    this.isFilterSidebarOpen = false;
    this.updateBodyScrollLock();
  }

  ngOnDestroy() {
    this.setBodyScrollLocked(false);
  }

  onRemoveFilter(filter: string) {
    // Also remove from mobile filter if available
    if (this.mobileFilterComponent) {
      this.mobileFilterComponent.removeFilterByName(filter);
    }
    this.removeFilter.emit(filter);
  }

  onRemoveAllFilters() {
    // Also remove all from mobile filter if available
    if (this.mobileFilterComponent) {
      this.mobileFilterComponent.removeAllFilters();
    }
    this.removeAllFilters.emit();
  }

  private updateBodyScrollLock() {
    const shouldLock = this.isSidebarOpen || this.isFilterSidebarOpen;
    this.setBodyScrollLocked(shouldLock);
  }

  private setBodyScrollLocked(locked: boolean) {
    if (typeof window === 'undefined') return;

    const body = this.document.body;
    if (!body) return;

    if (locked) {
      this.lockedScrollY = window.scrollY || 0;
      body.style.position = 'fixed';
      body.style.top = `-${this.lockedScrollY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
      body.style.overflow = 'hidden';
    } else {
      const scrollY = this.lockedScrollY;
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.overflow = '';
      window.scrollTo(0, scrollY);
      this.lockedScrollY = 0;
    }
  }
}

