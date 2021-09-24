import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ang-gui-drop-down',
  templateUrl: './ang-gui-drop-down.component.html',
  styleUrls: ['./ang-gui-drop-down.component.css'],
})
export class AngGuiDropDownComponent {
  toggleDropDown: boolean = false;

  //This is based on key value pair. if you are passing an array then it needs other implementations included
  @Input() dropDownModel: DropDownModelData[] = [
    { key: 'noData', value: 'Select' },
  ];

  @Input() selectedValue = 'Select';

  @Output() onSelectionChanged = new EventEmitter<DropDownModelData>();

  constructor() {}

  selectedValueChange(data?: any) {
    this.selectedValue = data.value;
    this.onSelectionChanged.emit(data);
    this.toggleDropDown = !this.toggleDropDown;
  }

  trackByFunction(index, item) {
    return index;
  }
}

export class DropDownModelData {
  key: String;
  value: String;
}
