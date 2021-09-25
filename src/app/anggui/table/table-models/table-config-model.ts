export class TableGeneralFunctions {
  enbleDataLoaderFunctionality: boolean = false;
  dataLoadURL: string = '';
  enableEditAndRevert: boolean = true;
}

export class TableConfigModel {
  colHeaderName: string = '';
  rowColField: string = '';
  isLinkField: boolean = false;
  linkURL: string = '';
  sortingEnbled: boolean = false;
  currentSortType: string = 'sortByString';
  isGraphFiled: boolean = false;
  hasIcon: boolean = false;
  iconPath: string = '';
  isEditableFiled: boolean = false;
  isDropdownFiled: boolean = false;
  headerName: '';
  isLabelFeild: boolean = false;
  sortingEnabled: boolean = false;
  isGrapghField: boolean = false;
  showOnlyIcon: boolean = false;
  isIconAvailable: boolean = false;
  iconUrl: '';
  iconName: 'info';
  textColor: 'black';
}

export class TableMenuOptionConfig {
  enableSort: boolean = false;
  calculateTotal: boolean = false;
  showPercentage: boolean = false;
  enablePanigation: boolean = false;
  enableFilter: boolean = false;
}
