import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang-gui-progress-bar',
  templateUrl: './ang-gui-progress-bar.component.html',
  styleUrls: ['./ang-gui-progress-bar.component.css'],
})
export class AngGuiProgressBarComponent {
  @Input() type: string = 'nomal';
  @Input() title: string = '';
  @Input() progressPercentage: number = 100;
  constructor() {}
  getCircularPercentage() {
    return this.progressPercentage > 0 && this.progressPercentage <= 50
      ? this.progressPercentage * 3.6
      : (this.progressPercentage - 50) * 3.6;
  }
}
