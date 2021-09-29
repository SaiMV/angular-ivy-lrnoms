import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang-gui-progress-bar',
  templateUrl: './ang-gui-progress-bar.component.html',
  styleUrls: ['./ang-gui-progress-bar.component.css'],
})
export class AngGuiProgressBarComponent {
  @Input() type: string = 'nomal';
  constructor() {}
}
