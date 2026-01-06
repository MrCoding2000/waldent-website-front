import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TechnicianFilter } from '../../shared/components/technician-filter/technician-filter';
import { TechniciansBreadcrumb } from '../../shared/components/technicians-breadcrumb/technicians-breadcrumb';
import { ActiveFilters } from '../../shared/components/active-filters/active-filters';

export interface Technician {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  projects: number;
  description: string;
  province: string;
  city: string;
  avatarUrl?: string;
}

@Component({
  selector: 'app-technicians-list',
  standalone: true,
  imports: [CommonModule, RouterLink, TechnicianFilter, TechniciansBreadcrumb, ActiveFilters],
  templateUrl: './technicians-list.html',
  styleUrl: './technicians-list.scss'
})
export class TechniciansList {
  @ViewChild('filterComponent') filterComponent?: TechnicianFilter;
  
  viewMode: 'grid' | 'list' = 'grid';
  sortBy: 'closest' | 'rating' = 'closest';

  technicians: Technician[] = [
    {
      id: 1,
      name: 'ساره صابری',
      specialty: 'تعمیر هندپیس، سیستم‌های ساکشن و کمپرسور',
      rating: 5,
      projects: 120,
      description: 'تعمیر هندپیس سیستم‌های ساکشن و کمپرسور دستگاه های CAD CAM و ماشین های میلینگ دستگاه‌های نوری و لایت کیور نرم افزار و جریان کار دیجیتال دندانپزشکی استریلیزاسیون و اتوکلاو نگهداری و تعمیرات تجهیزات دندانپزشکی',
      province: 'آذربایجان شرقی',
      city: 'تبریز'
    },
    {
      id: 2,
      name: 'رحیم نوبری',
      specialty: 'تجهیزات تصویربرداری و رادیولوژی دندانپزشکی',
      rating: 5,
      projects: 95,
      description: 'تعمیر هندپیس سیستم‌های ساکشن و کمپرسور دستگاه های CAD CAM و ماشین های میلینگ دستگاه‌های نوری و لایت کیور نرم افزار و جریان کار دیجیتال دندانپزشکی استریلیزاسیون و اتوکلاو نگهداری و تعمیرات تجهیزات دندانپزشکی',
      province: 'آذربایجان شرقی',
      city: 'تبریز'
    },
    {
      id: 3,
      name: 'على راهبر عبدالرزاق قمی',
      specialty: 'تعمیر هندپیس، سیستم‌های ساکشن و کمپرسور',
      rating: 5,
      projects: 150,
      description: 'تعمیر هندپیس سیستم‌های ساکشن و کمپرسور دستگاه های CAD CAM و ماشین های میلینگ دستگاه‌های نوری و لایت کیور نرم افزار و جریان کار دیجیتال دندانپزشکی استریلیزاسیون و اتوکلاو نگهداری و تعمیرات تجهیزات دندانپزشکی',
      province: 'آذربایجان شرقی',
      city: 'تبریز'
    },
  ];

  activeFilters: string[] = ['آذربایجان شرقی'];

  onFilterChange(filters: any) {
    // Handle filter changes
    console.log('Filters changed:', filters);
    this.updateActiveFilters(filters);
  }

  onActiveFiltersChange(activeFilters: string[]) {
    this.activeFilters = activeFilters;
  }

  private updateActiveFilters(filters: any) {
    this.activeFilters = [];
    if (filters.provinces?.length > 0) {
      this.activeFilters.push(...filters.provinces);
    }
    if (filters.cities?.length > 0) {
      this.activeFilters.push(...filters.cities);
    }
  }

  onRemoveFilter(filter: string) {
    // Remove from filter component if available
    if (this.filterComponent) {
      this.filterComponent.removeFilterByName(filter);
    } else {
      // Fallback: just update local state
      this.activeFilters = this.activeFilters.filter(f => f !== filter);
    }
  }

  removeAllFilters() {
    this.activeFilters = [];
  }

  onRemoveAllFilters() {
    // Remove all from filter component if available
    if (this.filterComponent) {
      this.filterComponent.removeAllFilters();
    } else {
      // Fallback: just update local state
      this.removeAllFilters();
    }
  }

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  setSortBy(sort: 'closest' | 'rating') {
    this.sortBy = sort;
  }

  get filteredTechnicians() {
    let result = [...this.technicians];
    
    if (this.sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    
    return result;
  }
}
