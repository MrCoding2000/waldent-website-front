import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  imports: [
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
