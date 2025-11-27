import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-toggle-switch',
  imports: [
    NgClass
  ],
  standalone: true,
  templateUrl: './toggle-switch.html',
  styleUrl: './toggle-switch.scss'
})
export class ToggleSwitch {
  @Input() title!: string;
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onToggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
