import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-property-box',
  standalone: true,
  imports: [],
  templateUrl: './property-box.html',
  styleUrl: './property-box.scss'
})
export class PropertyBox {
  @Input() propertyList!: {id:string, title: string, icon:string, items: any[]}[];
  constructor(public sanitizer: DomSanitizer) {
  }

}
