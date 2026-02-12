import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-secondary-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './secondary-menu.html',
  styleUrl: './secondary-menu.scss'
})
export class SecondaryMenu {
  @Input() secondaryMenuItems!: {title: string, routerLink: string, isSoon: boolean}[];

}
