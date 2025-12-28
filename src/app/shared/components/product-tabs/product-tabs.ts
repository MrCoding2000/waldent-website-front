import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {SellerProductCard} from '../seller-product-card/seller-product-card';
import {TabNavigationMenu} from '../tab-navigation-menu/tab-navigation-menu';

@Component({
  selector: 'app-product-tabs',
  standalone: true,
  imports: [CommonModule, NgClass, SellerProductCard, TabNavigationMenu],
  templateUrl: './product-tabs.html',
  styleUrl: './product-tabs.scss'
})
export class ProductTabs implements OnInit, OnDestroy {
  activeTab: string = 'specifications';

  constructor() {
  }

  tabs: { id: string, label: string }[] = [
    {id: 'specifications', label: 'مشخصات کالا'},
    {id: 'packaging', label: 'بسته‌بندی و ارسال'},
    {id: 'services', label: 'خدمات تأمین کننده / فروشنده'},
    {id: 'reviews', label: 'دیدگاه‌ها'},
    {id: 'questions', label: 'پرسش‌ها'}
  ];

  // Sample data
  specifications = [
    {label: 'جنس', value: 'استیل ضد زنگ، فولاد'},
    {label: 'برند', value: 'Zullu Industries'},
    {label: 'استاندارد ها', value: 'CE'},
    {label: 'گارانتی', value: 'شش ماه'}
  ];

  packagingInfo = [
    {label: 'بسته‌بندی', value: 'مقوای چند لایه'},
    {label: 'ارسال با پست', value: 'دارد'},
    {label: 'ارسال با تیپاکس', value: 'دارد'}
  ];

  servicesInfo = [
    {label: 'خدمات پس از فروش', value: 'پشتیبانی فنی آنلاین'},
    {label: 'گارانتی', value: '۱ سال (دنتال ایران)'}
  ];

  reviews = [
    {
      id: 1,
      userName: 'هومن شهرزاد',
      isBuyer: true,
      date: '۱۱ مرداد ۱۴۰۴',
      rating: 4,
      text: 'کیفیت ابزارها عالیه مخصوصاً آینه و پروب خیلی دقیق کار میکنن. بسته بندی مرتب بود و به موقع به دستم رسید. برای مطب کوچک من خیلی کاربردی بود',
      strengths: ['کیفیت بالا', 'دقت ابزارها', 'تحویل به موقع'],
      weaknesses: ['تنوع کم در مدل ابزارها'],
      sellerName: 'Yangjiang Little Star Hardware Products Co., Ltd',
      helpfulCount: 5,
      notHelpfulCount: 0
    },
    {
      id: 2,
      userName: 'سامان یوسفی',
      isBuyer: true,
      date: '۱۵ اسفند ۱۴۰۳',
      rating: 5,
      text: 'قیمت نسبت به کیفیت خیلی مناسبه. ابزارها ضد زنگ هستن و بعد از چند بار استفاده همچنان مثل روز اول هستن',
      strengths: ['قیمت مناسب', 'ضد زنگ بودن', 'دوام بالا'],
      weaknesses: [],
      sellerName: 'Shenzhen Weichenyang Technology Co.,ltd.',
      helpfulCount: 5,
      notHelpfulCount: 1
    }
  ];

  questions = [
    {
      id: 1,
      userName: 'هومن شهرزاد',
      date: '۵ مرداد ۱۴۰۴',
      question: 'آیا ابزارهای داخل کیت ضدزنگ هستند؟',
      answers: [
        {
          id: 1,
          userName: 'سامان یوسفی',
          date: '۹ مرداد ۱۴۰۴',
          text: 'من تهیه کردم و بعد شیش ماه ماه یچ نشونه ای از زنگ زدگی ندیدم.',
          helpfulCount: 1,
          notHelpfulCount: 0,
          isOfficial: false
        },
        {
          id: 2,
          userName: 'والدنت',
          date: '۵ مرداد ۱۴۰۴',
          text: 'بله، تمام ابزارها از استیل ضد زنگ با کیفیت ساخته شده اند و دوام بالایی دارند.',
          helpfulCount: 3,
          notHelpfulCount: 0,
          isOfficial: true
        }
      ]
    },
    {
      id: 2,
      userName: 'لاله مرادی',
      date: '۱۱ مرداد ۱۴۰۴',
      question: 'تعداد ابزار داخل کیت وجود دارد؟',
      answers: []
    }
  ];

  questionSortOptions = [
    {id: 'newest', label: 'جدیدترین'},
    {id: 'mostAnswered', label: 'بیشترین پاسخ'}
  ];

  selectedQuestionSort: string = 'newest';

  reviewSummary = {
    totalReviews: 2,
    averageRating: 4.8,
    totalVotes: 120,
    strengths: ['کیفیت خوب', 'ارزش خرید بالا', 'کارایی در مطب و کلینیک'],
    weaknesses: ['کیف حمل ضعیف', 'نیاز به طراحی بسته‌بندی بهتر'],
    summaryText: 'اکثر خریداران از کیفیت بالا، قیمت مناسب و کاربردی بودن کیت ابزار بهداشت دهان و دندان رضایت دارند. برخی پیشنهاد داده اند که بسته بندی و کیف حمل بهبود پیدا کند.'
  };

  reviewSortOptions = [
    {id: 'mostHelpful', label: 'مفیدترین'},
    {id: 'newest', label: 'جدیدترین'},
    {id: 'highestRating', label: 'بیشترین امتیاز'},
    {id: 'lowestRating', label: 'کمترین امتیاز'}
  ];

  selectedSortOption: string = 'mostHelpful';

  ngOnInit() {
    this.setupScrollListener();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  setupScrollListener() {
    // This will be handled by scroll event
  }

  getStars(rating: number): number[] {
    return Array.from({length: 5}, (_, i) => i < rating ? 1 : 0);
  }

  getRoundedRating(rating: number): number {
    return Math.round(rating);
  }
}

