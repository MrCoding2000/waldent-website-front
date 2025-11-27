import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Toast} from 'primeng/toast';
import {Header} from './core/layouts/header/header';
import {Footer} from './core/layouts/footer/footer';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Toast, Header, Footer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TranslateService]
})
export class AppComponent {
  title = 'waldent-website-front';
  private translate = inject(TranslateService);
  constructor() {
    this.translate.addLangs(['fa', 'en']);
    this.translate.setFallbackLang('fa');
    this.translate.use('fa');
  }
}
