import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {Button} from 'primeng/button';
import {Checkbox} from 'primeng/checkbox';
import {NgForOf} from '@angular/common';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {Divider} from 'primeng/divider';
import {InputText} from 'primeng/inputtext';
import {InputNumber} from 'primeng/inputnumber';
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
    Button,
    Checkbox,
    NgForOf,
    ReactiveFormsModule,
    InputGroupAddon,
    Divider,
    InputText,
    InputNumber,
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

  // داده‌های نمونه
  brands = ['KаVo', 'Dentsply Sirona', 'Vatech'];
  countries = ['آلمان', 'آمریکا', 'کره جنوبی', 'ژاپن'];

  // رنج‌ها
  priceRange: number[] = [1.0, 2.5];
  historyRange: number[] = [500, 600];

  // وضعیت تاگل‌ها
  toggleStates = {
    verifiedSeller: false,
    inStock: false,
    newCondition: false,
    usedCondition: false
  };
  rangeValues: any;

  constructor(private fb: FormBuilder) {
    this.initializeForm();
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
        ...this.toggleStates,
        priceRange: this.priceRange,
        historyRange: this.historyRange
      });
    });
  }

  onPriceRangeChange(event: any): void {
    this.priceRange = event.values;
    this.emitFilterChanges();
  }

  onHistoryRangeChange(event: any): void {
    this.historyRange = event.values;
    this.emitFilterChanges();
  }

  onToggleChange(field: string, event: any): void {
    this.toggleStates[field as keyof typeof this.toggleStates] = event.checked;
    this.emitFilterChanges();
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

  onCountryChange(country: string, event: any): void {
    const countriesArray = this.filterForm.get('selectedCountries') as FormArray;
    if (event.checked) {
      countriesArray.push(this.fb.control(country));
    } else {
      const index = countriesArray.controls.findIndex(x => x.value === country);
      countriesArray.removeAt(index);
    }
    this.emitFilterChanges();
  }

  emitFilterChanges(): void {
    this.filterChange.emit({
      ...this.filterForm.value,
      ...this.toggleStates,
      priceRange: this.priceRange,
      historyRange: this.historyRange
    });
  }

  resetFilters(): void {
    this.filterForm.reset();
    this.priceRange = [1.0, 2.5];
    this.historyRange = [500, 600];

    // بازنشانی تاگل‌ها
    Object.keys(this.toggleStates).forEach(key => {
      this.toggleStates[key as keyof typeof this.toggleStates] = false;
    });

    this.brandSearch = '';
    this.countrySearch = '';
  }

  get filteredBrands(): string[] {
    if (!this.brandSearch) return this.brands;
    return this.brands.filter(brand =>
      brand.toLowerCase().includes(this.brandSearch.toLowerCase())
    );
  }

  get filteredCountries(): string[] {
    if (!this.countrySearch) return this.countries;
    return this.countries.filter(country =>
      country.toLowerCase().includes(this.countrySearch.toLowerCase())
    );
  }

  onChangeIsStockGoodsStatus($event: boolean) {

  }
}
