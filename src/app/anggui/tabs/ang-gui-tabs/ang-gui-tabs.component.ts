import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { AngGuiTabComponent } from '../ang-gui-tab/ang-gui-tab.component';

@Component({
  selector: 'ang-gui-tabs',
  templateUrl: './ang-gui-tabs.component.html',
  styleUrls: ['./ang-gui-tabs.component.css'],
})
export class AngGuiTabsComponent implements AfterContentInit {
  @Input() pageNavBottom:boolean = false;
  @Input() type: string = 'nomal';
  tabs: AngGuiTabComponent[] = [];
  constructor() {}

  addTab(tab: AngGuiTabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
  @ContentChildren(AngGuiTabComponent) tabsList: QueryList<AngGuiTabComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabsList.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabsList.first);
    }
  }

  selectTab(tab: AngGuiTabComponent) {
    // deactivate all tabs
    this.tabsList.toArray().forEach((tab) => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }

  getContainerClassName(pageNavBottom){

    return pageNavBottom ? "tab-option-contianer" : "tab-option-contianer  bottom-tab";

  }

  getTabsContainerClassName(pageNavBottom){

    return pageNavBottom ? "tabs-container" : "tabs-container bottom-tab";

  }

}
