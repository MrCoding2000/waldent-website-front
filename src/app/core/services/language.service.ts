import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject} from 'rxjs';

export type AppLang = 'fa' | 'en';
export type AppDir = 'rtl' | 'ltr';

@Injectable({providedIn: 'root'})
export class LanguageService {
  private readonly storageKey = 'lang';
  private readonly _lang$ = new BehaviorSubject<AppLang>('fa');

  readonly lang$ = this._lang$.asObservable();

  constructor(
    private readonly translate: TranslateService,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {
  }

  get currentLang(): AppLang {
    return this._lang$.value;
  }

  get currentDir(): AppDir {
    return this.getDir(this.currentLang);
  }

  init() {
    this.translate.addLangs(['fa', 'en']);
    this.translate.setFallbackLang('fa');

    const initial = this.getInitialLang();
    this.setLang(initial);
  }

  toggleLang() {
    this.setLang(this.currentLang === 'fa' ? 'en' : 'fa');
  }

  setLang(lang: AppLang) {
    this._lang$.next(lang);
    this.translate.use(lang);
    this.applyDirAndLangAttrs(lang);
    this.persistLang(lang);
  }

  getDir(lang: AppLang): AppDir {
    return lang === 'fa' ? 'rtl' : 'ltr';
  }

  getLabel(lang: AppLang): string {
    return lang === 'fa' ? 'فا' : 'EN';
  }

  getFullLabel(lang: AppLang): string {
    return lang === 'fa' ? 'فارسی' : 'English';
  }

  getShortLabelKey(lang: AppLang): string {
    return lang === 'fa' ? 'header.lang.short.fa' : 'header.lang.short.en';
  }

  getFullLabelKey(lang: AppLang): string {
    return lang === 'fa' ? 'header.lang.full.fa' : 'header.lang.full.en';
  }

  private getInitialLang(): AppLang {
    if (!isPlatformBrowser(this.platformId)) return 'fa';

    const stored = window.localStorage.getItem(this.storageKey);
    if (stored === 'fa' || stored === 'en') return stored;
    return 'fa';
  }

  private applyDirAndLangAttrs(lang: AppLang) {
    // Apply to <html> so it affects the whole app
    this.document.documentElement.setAttribute('lang', lang);
    this.document.documentElement.setAttribute('dir', this.getDir(lang));
  }

  private persistLang(lang: AppLang) {
    if (!isPlatformBrowser(this.platformId)) return;
    window.localStorage.setItem(this.storageKey, lang);
  }
}


