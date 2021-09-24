import { Component, Input } from '@angular/core';

@Component({
  selector: 'ang-gui-card',
  templateUrl: './ang-gui-cards.component.html',
  styleUrls: ['./ang-gui-cards.component.css'],
})
export class AngGuiCardsComponent {
  @Input() type: string = 'nomal';
  constructor() {}
}
