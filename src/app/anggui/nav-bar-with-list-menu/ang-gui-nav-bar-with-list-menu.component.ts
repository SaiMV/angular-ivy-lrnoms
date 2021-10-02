import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-gui-nav-bar-with-list-menu',
  templateUrl: './ang-gui-nav-bar-with-list-menu.component.html',
  styleUrls: ['./ang-gui-nav-bar-with-list-menu.component.css']
})
export class AngGuiNavBarWithListMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nabBarMenuConfig = [
    {
        menuText: 'Home',
        menuitems: [{
        menuText: 'item 1',
        menuitems: null,
        menuNavLink:null,
        menuIcon:null },
        {
        menuText: 'item 2',
        menuitems: null,
        menuNavLink:null,
        menuIcon:null }
        ],
        menuNavLink:null,
        menuIcon:null
    },
    {
      menuText: 'About',
      menuitems: null,
      menuNavLink:null,
      menuIcon:null
  }
    ]
  
}
