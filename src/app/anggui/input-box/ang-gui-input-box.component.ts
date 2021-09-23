import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang-gui-input-box',
  templateUrl: './ang-gui-input-box.component.html',
  styleUrls: ['./ang-gui-input-box.component.css'],
})
export class AngGuiInputBoxComponent {
  @Input() placeHolder: string = '';
  constructor() {}
}
