import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang-gui-card-content',
  templateUrl: './ang-gui-card-content.component.html',
  styleUrls: ['./ang-gui-card-content.component.css'],
})
export class AngGuiCardContentComponent {
  @Input() type: string = 'nomal';
  constructor() {}
}
