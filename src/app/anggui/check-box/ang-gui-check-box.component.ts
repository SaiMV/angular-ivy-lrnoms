import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang-gui-check-box',
  templateUrl: './ang-gui-check-box.component.html',
  styleUrls: ['./ang-gui-check-box.component.css'],
})
export class AngGuiCheckBoxComponent {
  @Input() type: string = 'nomal';
  constructor() {}
}
