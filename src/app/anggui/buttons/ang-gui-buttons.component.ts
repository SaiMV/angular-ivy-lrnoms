import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang-gui-button',
  templateUrl: './ang-gui-buttons.component.html',
  styleUrls: ['./ang-gui-buttons.component.css'],
})
export class AngGuiButtonsComponent {
  @Input() type:string = 'nomal';
  constructor() {}
}
