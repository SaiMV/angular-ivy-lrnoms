import { Component, Input } from '@angular/core';
import { AngGuiTabsComponent } from '../ang-gui-tabs/ang-gui-tabs.component';

@Component({
  selector: 'ang-gui-tab',
  templateUrl: './ang-gui-tab.component.html',
  styleUrls: ['./ang-gui-tab.component.css'],
})
export class AngGuiTabComponent {
  @Input() type: string = 'nomal';
  @Input('tabTitle') title: string;
  @Input() active = false;

  constructor(tabs:AngGuiTabsComponent) {
    tabs.addTab(this);
  }
}
