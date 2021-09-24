import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang-gui-card-header',
  templateUrl: './ang-gui-card-header.component.html',
  styleUrls: ['./ang-gui-card-header.component.css'],
})
export class AngGuiCardHeaderComponent {
  @Input() type: string = 'nomal';
  constructor() {}
}
