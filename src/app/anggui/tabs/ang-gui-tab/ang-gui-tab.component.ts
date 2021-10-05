import { Component, Input } from '@angular/core';
import { AngGuiTabsComponent } from '../ang-gui-tabs/ang-gui-tabs.component';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'ang-gui-tab',
  templateUrl: './ang-gui-tab.component.html',
  styleUrls: ['./ang-gui-tab.component.css'],
  animations: [
    trigger('tabMove', [
      state('first', style({ transform: 'translate3d(100%, 0, 0)' })),
      state('center', style({ transform: 'none' })),
      state('last', style({ transform: 'translate3d(-100%, 0, 0)' })),

      transition('center => first, center => last, first => center, last => center', [
        animate('500ms ease')
      ])
    ])
  ]
})
export class AngGuiTabComponent {
  @Input() type: string = 'nomal';
  @Input('tabTitle') title: string;
  @Input() active = false;

  constructor(tabs:AngGuiTabsComponent) {
    tabs.addTab(this);
  }
}
