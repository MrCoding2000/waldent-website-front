import {Component, EventEmitter, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Checkbox} from 'primeng/checkbox';
import {NgClass} from '@angular/common';

import {ToggleSwitch} from '../toggle-switch/toggle-switch';
import {Slider} from 'primeng/slider';

interface FilterData {
  approval: string[];
  price: {
    min: number;
    max: number;
  };
  brands: string[];
  countries: string[];
  condition: string[];
}

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [
    Checkbox,
    NgClass,
    ReactiveFormsModule,
    FormsModule,
    ToggleSwitch,
    Slider
  ],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.scss'
})
export class ProductFilter {
  @Output() filterChange = new EventEmitter<any>();

  filterForm!: FormGroup;
  brandSearch: string = '';
  countrySearch: string = '';
      parentApproved = true;
    sellerApproved = false;

  // داده‌های نمونه
  brands: Array<{ name: string; logo: string; selected?: boolean }> = [
    { name: 'KaVo', logo: 'assets/images/KaVo.png', selected: false },
    { name: 'Dentsply Sirona', logo: 'assets/images/Dentsply.png', selected: false },
    { name: 'Vatech', logo: 'assets/images/Vatech.png', selected: false }
  ];
  countries: Array<{ name: string; selected?: boolean }> = [
    { name: 'آلمان', selected: false },
    { name: 'آمریکا', selected: false },
    { name: 'کره جنوبی', selected: false },
    { name: 'ژاپن', selected: false }
  ];

  // رنج‌ها
  priceRange: number[] = [1.0, 2.5];
  historyRange: number[] = [500, 600];
  minPrice: number = 100;
  maxPrice: number = 500000000;
  rangeValues: number[] = [this.minPrice, this.maxPrice];

  // وضعیت expand/collapse بخش‌ها
  expandedSections = {
    price: true,
    brand: true,
    madeIn: true
  };

  // وضعیت فیلترها
  filters = {
    parentApproved: false,
    sellerApproved: false,
    available: false,
    firstHand: false,
    secondHand: false
  };

  constructor(private fb: FormBuilder) {
    this.initializeForm();
    this.rangeValues = [this.minPrice, this.maxPrice];
  }

  initializeForm(): void {
    this.filterForm = this.fb.group({
      // فیلترهای تایید
      parentApproved: [false],

      // برندها
      selectedBrands: this.fb.array([]),

      // کشورها
      selectedCountries: this.fb.array([])
    });

    this.filterForm.valueChanges.subscribe(value => {
      this.filterChange.emit({
        ...value,
        ...this.filters,
        priceRange: this.rangeValues,
        historyRange: this.historyRange
      });
    });
  }

  onPriceRangeChange(event: any): void {
    if (event.values) {
      this.rangeValues = event.values;
    } else {
      this.rangeValues = event;
    }
    this.priceRange = this.rangeValues;
  }

  onHistoryRangeChange(event: any): void {
    this.historyRange = event.values;
    this.emitFilterChanges();
  }

  onToggleChange(field: string, value: boolean): void {
    (this.filters as any)[field] = value;
    this.emitFilterChanges();
  }

  toggleCheckbox(field: 'parentApproved' | 'sellerApproved'): void {
    (this.filters as any)[field] = !(this.filters as any)[field];
    this.emitFilterChanges();
  }

  toggleSection(section: 'price' | 'brand' | 'madeIn'): void {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fa-IR').format(price);
  }

  applyPriceFilter(): void {
    this.emitFilterChanges();
  }

  openKeyboardInput(): void {
    // TODO: Implement keyboard input modal
    console.log('Open keyboard input');
  }

  onBrandChange(brand: string, event: any): void {
    const brandsArray = this.filterForm.get('selectedBrands') as FormArray;
    if (event.checked) {
      brandsArray.push(this.fb.control(brand));
    } else {
      const index = brandsArray.controls.findIndex(x => x.value === brand);
      brandsArray.removeAt(index);
    }
    this.emitFilterChanges();
  }

  onCountryChange(country: any, event: any): void {
    const countriesArray = this.filterForm.get('selectedCountries') as FormArray;
    if (event.checked) {
      countriesArray.push(this.fb.control(country.name));
    } else {
      const index = countriesArray.controls.findIndex(x => x.value === country.name);
      countriesArray.removeAt(index);
    }
    this.emitFilterChanges();
  }

  emitFilterChanges(): void {
    this.filterChange.emit({
      ...this.filterForm.value,
      ...this.filters,
      priceRange: this.rangeValues,
      historyRange: this.historyRange
    });
  }

  resetFilters(): void {
    this.filterForm.reset();
    this.rangeValues = [this.minPrice, this.maxPrice];
    this.priceRange = [this.minPrice, this.maxPrice];
    this.historyRange = [500, 600];

    // بازنشانی فیلترها
    this.filters = {
      parentApproved: false,
      sellerApproved: false,
      available: false,
      firstHand: false,
      secondHand: false
    };

    this.brandSearch = '';
    this.countrySearch = '';

    // Reset brand selections
    this.brands.forEach(brand => brand.selected = false);

    // Reset country selections
    this.countries.forEach(country => country.selected = false);
  }

  get filteredBrands(): any[] {
    if (!this.brandSearch) return this.brands;
    return this.brands.filter(brand =>
      brand.name.toLowerCase().includes(this.brandSearch.toLowerCase())
    );
  }

  get filteredCountries(): any[] {
    if (!this.countrySearch) return this.countries;
    return this.countries.filter(country =>
      country.name.toLowerCase().includes(this.countrySearch.toLowerCase())
    );
  }

  onChangeIsStockGoodsStatus($event: boolean) {

  }
}
