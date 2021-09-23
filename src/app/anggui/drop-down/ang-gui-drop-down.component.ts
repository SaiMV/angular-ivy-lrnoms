import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang-gui-drop-down',
  templateUrl: './ang-gui-drop-down.component.html',
  styleUrls: ['./ang-gui-drop-down.component.css'],
})
export class AngGuiDropDownComponent {
  @Input() type: string = 'nomal';
  constructor() {}
}
