import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SecondaryMenu} from '../secondary-menu/secondary-menu';
import {NgClass, NgTemplateOutlet} from '@angular/common';
import {Drawer} from 'primeng/drawer';
import {PrimeTemplate} from 'primeng/api';
import {Checkbox} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    SecondaryMenu,
    NgClass,
    Drawer,
    NgTemplateOutlet,
    PrimeTemplate,
    Checkbox,
    FormsModule
  ],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {
  filteredItem: {key: string, value: string, icon: string } =
    {
      key: 'همه',
      value: 'all',
      icon: `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 9L9 0L14.5 9H3.5ZM14.5 20C13.25 20 12.1875 19.5625 11.3125 18.6875C10.4375 17.8125 10 16.75 10 15.5C10 14.25 10.4375 13.1875 11.3125 12.3125C12.1875 11.4375 13.25 11 14.5 11C15.75 11 16.8125 11.4375 17.6875 12.3125C18.5625 13.1875 19 14.25 19 15.5C19 16.75 18.5625 17.8125 17.6875 18.6875C16.8125 19.5625 15.75 20 14.5 20ZM0 19.5V11.5H8V19.5H0Z" fill="#222222"/>
             </svg>`
    };
  statementFilteredItem: {key:string, value: string, icon: string } = {key: '', value: '', icon: ''};
  statementFilterCategoryItems: { key: string, value: string, icon: string }[] = [
    {
      key: 'جشنواره زمستان',
      value: 'winter',
      icon: `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 12.975L12.425 14.125C12.6083 14.2417 12.7875 14.2375 12.9625 14.1125C13.1375 13.9875 13.2 13.8167 13.15 13.6L12.65 11.425L14.35 9.95C14.5167 9.8 14.5667 9.62083 14.5 9.4125C14.4333 9.20417 14.2833 9.09167 14.05 9.075L11.825 8.9L10.95 6.825C10.8667 6.625 10.7167 6.525 10.5 6.525C10.2833 6.525 10.1333 6.625 10.05 6.825L9.175 8.9L6.95 9.075C6.71667 9.09167 6.56667 9.20417 6.5 9.4125C6.43333 9.62083 6.48333 9.8 6.65 9.95L8.35 11.425L7.85 13.6C7.8 13.8167 7.8625 13.9875 8.0375 14.1125C8.2125 14.2375 8.39167 14.2417 8.575 14.125L10.5 12.975ZM7.15 18.5H4.5C3.95 18.5 3.47917 18.3042 3.0875 17.9125C2.69583 17.5208 2.5 17.05 2.5 16.5V13.85L0.575 11.9C0.391667 11.7 0.25 11.4792 0.15 11.2375C0.05 10.9958 0 10.75 0 10.5C0 10.25 0.05 10.0042 0.15 9.7625C0.25 9.52083 0.391667 9.3 0.575 9.1L2.5 7.15V4.5C2.5 3.95 2.69583 3.47917 3.0875 3.0875C3.47917 2.69583 3.95 2.5 4.5 2.5H7.15L9.1 0.575C9.3 0.391667 9.52083 0.25 9.7625 0.15C10.0042 0.05 10.25 0 10.5 0C10.75 0 10.9958 0.05 11.2375 0.15C11.4792 0.25 11.7 0.391667 11.9 0.575L13.85 2.5H16.5C17.05 2.5 17.5208 2.69583 17.9125 3.0875C18.3042 3.47917 18.5 3.95 18.5 4.5V7.15L20.425 9.1C20.6083 9.3 20.75 9.52083 20.85 9.7625C20.95 10.0042 21 10.25 21 10.5C21 10.75 20.95 10.9958 20.85 11.2375C20.75 11.4792 20.6083 11.7 20.425 11.9L18.5 13.85V16.5C18.5 17.05 18.3042 17.5208 17.9125 17.9125C17.5208 18.3042 17.05 18.5 16.5 18.5H13.85L11.9 20.425C11.7 20.6083 11.4792 20.75 11.2375 20.85C10.9958 20.95 10.75 21 10.5 21C10.25 21 10.0042 20.95 9.7625 20.85C9.52083 20.75 9.3 20.6083 9.1 20.425L7.15 18.5Z" fill="#222222"/>
             </svg>`
    },
    {
      key: 'پیشنهادهای ویژه',
      value: 'special',
      icon: `<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10.1724C0 8.28904 0.558333 6.4807 1.675 4.74737C2.79167 3.01404 4.325 1.49737 6.275 0.197368C6.64167 -0.0526316 7.02083 -0.0651316 7.4125 0.159868C7.80417 0.384868 8 0.722368 8 1.17237V2.47237C8 3.03904 8.19583 3.51404 8.5875 3.89737C8.97917 4.2807 9.45833 4.47237 10.025 4.47237C10.3083 4.47237 10.5792 4.40987 10.8375 4.28487C11.0958 4.15987 11.325 3.9807 11.525 3.74737C11.6583 3.5807 11.8292 3.47654 12.0375 3.43487C12.2458 3.3932 12.4417 3.43904 12.625 3.57237C13.675 4.32237 14.5 5.2807 15.1 6.44737C15.7 7.61404 16 8.8557 16 10.1724C16 11.639 15.6417 12.9765 14.925 14.1849C14.2083 15.3932 13.2667 16.3474 12.1 17.0474C12.3833 16.6474 12.6042 16.2099 12.7625 15.7349C12.9208 15.2599 13 14.7557 13 14.2224C13 13.5557 12.875 12.9265 12.625 12.3349C12.375 11.7432 12.0167 11.214 11.55 10.7474L8 7.27237L4.475 10.7474C3.99167 11.2307 3.625 11.764 3.375 12.3474C3.125 12.9307 3 13.5557 3 14.2224C3 14.7557 3.07917 15.2599 3.2375 15.7349C3.39583 16.2099 3.61667 16.6474 3.9 17.0474C2.73333 16.3474 1.79167 15.3932 1.075 14.1849C0.358333 12.9765 0 11.639 0 10.1724ZM8 10.0724L10.125 12.1474C10.4083 12.4307 10.625 12.7474 10.775 13.0974C10.925 13.4474 11 13.8224 11 14.2224C11 15.039 10.7083 15.7349 10.125 16.3099C9.54167 16.8849 8.83333 17.1724 8 17.1724C7.16667 17.1724 6.45833 16.8849 5.875 16.3099C5.29167 15.7349 5 15.039 5 14.2224C5 13.839 5.075 13.4682 5.225 13.1099C5.375 12.7515 5.59167 12.4307 5.875 12.1474L8 10.0724Z" fill="#222222"/>
             </svg>`
    }
  ];
  secondaryMenuItems: { title: string; routerLink: string; isSoon: boolean }[] = [
    {title: 'محصولات', routerLink: '/filtered-layout/products', isSoon: false},
    {title: 'آگهی ها', routerLink: '/filtered-layout/advertisements', isSoon: true},
    {title: 'فروشندگان', routerLink: '/filtered-layout/sellers', isSoon: true},
    {title: 'تکنسین ها', routerLink: '/filtered-layout/technicians', isSoon: false},
  ];
  private activeStatementFilterCategoryItems!: number;
  selectedLocation: string = 'تهران';
  @Input() categoryListItems!: {key: string, value: string, icon: string }[];
  @Input() isMobile: boolean = false;
  showCategories: boolean = false;
  checked: any;

  constructor(public sanitizer: DomSanitizer) {
  }

  onCheckStatementFilteredView(statementFilterCategoryItem: {
    key: string,
    value: string;
    icon: string
  }) {
    if (this.statementFilteredItem.value) {
      this.statementFilterCategoryItems.splice(this.activeStatementFilterCategoryItems, 0, this.statementFilteredItem);
      this.onRemoveFromStatementFilterAndAddToStatementFilteredItem(statementFilterCategoryItem);
    } else {
      this.onRemoveFromStatementFilterAndAddToStatementFilteredItem(statementFilterCategoryItem);
    }
  }

  /**
   * Remove From Statement Filter And Add To Statement Filtered Item
   * @param statementFilterCategoryItem
   */
  onRemoveFromStatementFilterAndAddToStatementFilteredItem(statementFilterCategoryItem: {
    key:string,
    value: string;
    icon: string
  }) {
    this.activeStatementFilterCategoryItems = this.statementFilterCategoryItems.indexOf(statementFilterCategoryItem);
    this.statementFilterCategoryItems.splice(this.activeStatementFilterCategoryItems, 1);
    this.statementFilteredItem = statementFilterCategoryItem;
  }

  /**
   * Remove Statement Filtered Item
   * @param statementFilteredItem
   */
  onRemoveStatementFilteredItem(statementFilteredItem: { key: string, value: string; icon: string }) {
    this.statementFilteredItem = {key:'', value: '', icon: ''};
    this.statementFilterCategoryItems.splice(this.activeStatementFilterCategoryItems, 0, statementFilteredItem);
  }

  onOpenCloseCategoryItems() {
    this.showCategories = !this.showCategories;
  }

  onSetNewCategory(categoryItem: {key: string, value: string; icon: string }) {
    this.filteredItem = categoryItem;
  }

  onOpenCloseFilterItems() {

  }
}
