import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    RouterLink,
  ],
  templateUrl: './footer.html',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();

  // Ordered to match the provided screenshot in RTL (right-most column first)
  readonly linkColumns: Array<Array<{ labelKey: string; path: string }>> = [
    [
      {labelKey: 'footer.links.products', path: '/products'},
      {labelKey: 'footer.links.sellers', path: '/sellers'},
      {labelKey: 'footer.links.about_us', path: '/about-us'},
      {labelKey: 'footer.links.contact_us', path: '/support'},
      {labelKey: 'footer.links.news_articles', path: '/products'},
    ],
    [
      {labelKey: 'footer.links.support', path: '/support'},
      {labelKey: 'footer.links.order_security', path: '/order-security'},
      {labelKey: 'footer.links.shipping_returns', path: '/order-security'},
      {labelKey: 'footer.links.service_request_guide', path: '/support'},
      {labelKey: 'footer.links.faq', path: '/support'},
    ],
    [
      {labelKey: 'footer.links.buyer_membership', path: '/support'},
      {labelKey: 'footer.links.seller_membership', path: '/support'},
      {labelKey: 'footer.links.technician_membership', path: '/support'},
      {labelKey: 'footer.links.categories', path: '/products'},
      {labelKey: 'footer.links.my_account', path: '/support'},
    ],
    [
      {labelKey: 'footer.links.terms', path: '/support'},
      {labelKey: 'footer.links.privacy', path: '/support'},
      {labelKey: 'footer.links.sellers_guide', path: '/support'},
      {labelKey: 'footer.links.cookies', path: '/support'},
      {labelKey: 'footer.links.report_problem', path: '/support'},
    ],
  ];

  constructor(public readonly language: LanguageService) {
  }

  get currentLanguageLabelKey(): string {
    return this.language.getShortLabelKey(this.language.currentLang);
  }

  toggleLanguage() {
    this.language.toggleLang();
  }
}
