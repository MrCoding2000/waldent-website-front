import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleSwitch } from '../toggle-switch/toggle-switch';

@Component({
  selector: 'app-technician-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, ToggleSwitch],
  templateUrl: './technician-filter.html',
  styleUrl: './technician-filter.scss'
})
export class TechnicianFilter implements OnChanges {
  @Output() filterChange = new EventEmitter<any>();
  @Output() activeFiltersChange = new EventEmitter<string[]>();
  @Input() removeFilterName: string | null = null;

  available = false;
  expandedSections = {
    specialty: true,
    province: true,
    city: false
  };

  specialtySearch = '';
  provinceSearch = '';
  citySearch = '';

  specialties: Array<{ name: string; selected: boolean }> = [
    { name: 'یونیت و صندلی ', selected: false },
    { name: 'اتوکلاو ', selected: false },
    { name: 'تعمیر هندپیس', selected: false },
    { name: 'تجهیزات ', selected: false },
    { name: 'سیستم‌های ساکشن', selected: false },
    { name: 'کمپرسور', selected: false },
  ];

  provinces: Array<{ name: string; selected: boolean }> = [
    { name: 'آذربایجان شرقی', selected: true },
    { name: 'آذربایجان غربی', selected: false },
    { name: 'اردبیل', selected: false },
    { name: 'اصفهان', selected: false },
    { name: 'البرز', selected: false },
    { name: 'ایلام', selected: false },
    { name: 'بوشهر', selected: false },
    { name: 'تهران', selected: false },
    { name: 'چهارمحال و بختیاری', selected: false },
    { name: 'خراسان جنوبی', selected: false },
    { name: 'خراسان رضوی', selected: false },
    { name: 'خراسان شمالی', selected: false },
  ];

  cities: Array<{ name: string; selected: boolean }> = [
    { name: 'تبریز', selected: false },
    { name: 'اردبیل', selected: false },
    { name: 'ارومیه', selected: false },
    { name: 'اصفهان', selected: false },
    { name: 'تهران', selected: false },
    { name: 'شیراز', selected: false },
  ];

  get filteredSpecialties() {
    if (!this.specialtySearch) return this.specialties;
    return this.specialties.filter(s => s.name.includes(this.specialtySearch));
  }

  get filteredProvinces() {
    if (!this.provinceSearch) return this.provinces;
    return this.provinces.filter(p => p.name.includes(this.provinceSearch));
  }

  get filteredCities() {
    if (!this.citySearch) return this.cities;
    return this.cities.filter(c => c.name.includes(this.citySearch));
  }

  get activeFilters(): string[] {
    const filters: string[] = [];
    const selectedProvinces = this.provinces.filter(p => p.selected).map(p => p.name);
    const selectedCities = this.cities.filter(c => c.selected).map(c => c.name);
    if (selectedProvinces.length > 0) {
      filters.push(...selectedProvinces);
    }
    if (selectedCities.length > 0) {
      filters.push(...selectedCities);
    }
    return filters;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['removeFilterName'] && this.removeFilterName) {
      this.removeActiveFilter(this.removeFilterName);
      // Reset after processing
      setTimeout(() => {
        this.removeFilterName = null;
      }, 0);
    }
  }

  toggleSection(section: 'specialty' | 'province' | 'city') {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  removeActiveFilter(filter: string) {
    const province = this.provinces.find(p => p.name === filter);
    if (province) {
      province.selected = false;
      this.emitFilterChange();
    }
    const city = this.cities.find(c => c.name === filter);
    if (city) {
      city.selected = false;
      this.emitFilterChange();
    }
  }

  removeAllFilters() {
    this.provinces.forEach(p => p.selected = false);
    this.cities.forEach(c => c.selected = false);
    this.specialties.forEach(s => s.selected = false);
    this.available = false;
    this.emitFilterChange();
  }

  // Public method to remove a filter by name (can be called from parent)
  public removeFilterByName(filterName: string) {
    this.removeActiveFilter(filterName);
  }

  onAvailableChange(checked: boolean) {
    this.available = checked;
    this.emitFilterChange();
  }

  emitFilterChange() {
    const selectedSpecialties = this.specialties.filter(s => s.selected).map(s => s.name);
    const selectedProvinces = this.provinces.filter(p => p.selected).map(p => p.name);
    const selectedCities = this.cities.filter(c => c.selected).map(c => c.name);

    const activeFilters = [...selectedProvinces, ...selectedCities];
    this.activeFiltersChange.emit(activeFilters);

    this.filterChange.emit({
      specialties: selectedSpecialties,
      provinces: selectedProvinces,
      cities: selectedCities,
      available: this.available
    });
  }
}

