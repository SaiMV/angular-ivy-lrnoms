import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang-gui-card-footer',
  templateUrl: './ang-gui-card-footer.component.html',
  styleUrls: ['./ang-gui-card-footer.component.css'],
})
export class AngGuiCardFooterComponent {
  @Input() type: string = 'nomal';
  constructor() {}
}
