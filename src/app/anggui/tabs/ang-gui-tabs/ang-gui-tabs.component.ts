import { Component, Input ,ContentChildren,
  QueryList,
  AfterContentInit} from '@angular/core';
import { AngGuiTabComponent } from '../ang-gui-tab-item/ang-gui-tab.component';

@Component({
  selector: 'ang-gui-tabs',
  templateUrl: './ang-gui-tabs.component.html',
  styleUrls: ['./ang-gui-tabs.component.css'],
})
export class AngGuiTabsComponent implements AfterContentInit{
  @Input() type: string = 'nomal';
  tabs: AngGuiTabComponent[] = [];
  constructor() {}

  
  addTab(tab: AngGuiTabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
  @ContentChildren(TabComponent) tabs: QueryList<AngGuiTabComponent>;
  
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab)=>tab.active);
    
    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  
  selectTab(tab: AngGuiTabComponent){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    
    // activate the tab the user has clicked on.
    tab.active = true;
  }
}

