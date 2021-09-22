import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang-gui-icon',
  templateUrl: './ang-gui-icons.component.html',
  styleUrls: ['./ang-gui-icons.component.css'],
})
export class AngGuiIconsComponent {
  @Input() iconName: string = "";

  constructor() {}
}
export enum ICONS {
  CLOSE,
}
