import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang-gui-icon',
  templateUrl: './ang-gui-icons.component.html',
})
export class AngGuiIconsComponent {
  @Input() iconName: string = '';
  @Input() width: number = 24;
  @Input() margin: number = 0;
  @Input() height: number = 24;
  @Input() fillColor: string;
  @Input() strokeColor: string;

  constructor() {}

  getFillColor() {
    return this.fillColor;
  }
  getStrokeColor() {
    return this.strokeColor;
  }
}
export enum ICONS {
  CLOSE,
}
