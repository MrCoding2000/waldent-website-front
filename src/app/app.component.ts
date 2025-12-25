import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Toast} from 'primeng/toast';
import {Header} from './core/layouts/header/header';
import {Footer} from './core/layouts/footer/footer';
import {LanguageService} from './core/services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Toast, Header, Footer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'waldent-website-front';
  private language = inject(LanguageService);
  constructor() {
    this.language.init();
  }
}
