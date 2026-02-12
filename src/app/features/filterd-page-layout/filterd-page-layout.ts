import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-filtered-page-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './filterd-page-layout.html',
  styleUrl: './filterd-page-layout.scss'
})
export class FilteredPageLayout {

}
