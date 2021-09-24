import {
  Component,
  OnInit,
  Input,
  Pipe,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  NgZone,
  HostListener,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  Renderer2,
  HostBinding,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { DummyTableConfig } from '../../anggui/table/table-models/table-dummy-configuration';
@Component({
  selector: 'ang-gui-table',
  templateUrl: './ang-gui-table.component.html',
  styleUrls: ['./ang-gui-table.component.css'],

  animations: [
    trigger('toggleMenu', [
      state('collapsed', style({ opacity: 0, width: 0, height: '100%' })),
      state('expanded', style({ opacity: 1, width: '220px', height: '100%' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.2,0.0,0.1,.5)')
      ),
    ]),
    trigger('fade-in-overlay', [
      state('void', style({ opacity: 0, width: 0 })),
      state('*', style({ opacity: 1, width: 'calc(100% - 18px)' })),
      transition('void <=> *', [animate('.2s ease')]),
      transition('* <=> void', [animate('.1s ease')]),
    ]),
  ],
})
export class AngGuiTableComponent implements OnInit {
  @Input() tableName: string = '';
  @Output() linkTextClicked = new EventEmitter();
  @Input() rowselectionColorNeeded: boolean = true;
  @Input() indexSelectedRow = -1;
  @Input() disableBody: any;
  @Input() indexSerachSelectedRow: any;
  @Input() rowselectionColr: boolean = true;
  @Output() selectedRowDataObject: any = new EventEmitter();
  @Output() onBlur = new EventEmitter();
  @Output() onFocus = new EventEmitter();
  @Output() onKeyUp = new EventEmitter();

  name = 'Angular';
  bodyWidth: number = 0;
  leftPos: number = 0;
  leftHeadPos: number;
  el: ElementRef;
  renderer2: Renderer2;
  headFixPosition: number = 0;
  headFixPositionTop: number = 0;
  expanded: boolean = false;
  tableMainConfigs: any[];
  tableDataConfigs: any[];

  dataSetForTable: any[];

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    let dummyConfig = new DummyTableConfig();
    this.tableMainConfigs = dummyConfig.tableMainConfigs;
    this.tableDataConfigs = dummyConfig.tableConfigs;

    this.dataSetForTable = dummyConfig.dataModelForTableSmall;

    setInterval(() => {
      // this.zone.runOutsideAngular(() => {

      this.dataSetForTable.push(dummyConfig.dataModelForTableSmall[0]);
      // });

      //  },8000);
      //  setInterval(() =>{
      //   this.zone.runOutsideAngular(() => {

      //   this.dataSetForTable.forEach(element => {
      //     console.log(element)
      //     element['lane8'] = element['lane8']+1
      //   });
      // });
    }, 2000);
  }

  trackByIds(index, item) {
    return item.id;
  }

  @HostListener('scroll', ['$event'])
  divScroll($event) {
    try {
      this.zone.runOutsideAngular(() => {
        this.headFixPosition = $event.srcElement.scrollTop;
        this.headFixPositionTop = -$event.srcElement.scrollTop;
        this.leftPos = $event.srcElement.scrollLeft;
        this.leftHeadPos = -$event.srcElement.scrollLeft;
      });
    } catch (err) {}
  }

  clickOnLink(colField?: any, link?: any) {
    this.linkTextClicked.emit({ colField: colField, link: link });
  }

  taggleTableMenu() {
    this.expanded = !this.expanded;
  }

  getGraphFeldColor(fieldValue) {
    // if (this.graphFeildThreshold != null && this.graphFeildThreshold != "") {
    //   return (parseFloat(fieldValue) >= parseFloat(this.graphFeildThreshold)) ? 'red' : 'black'
    // }
    return parseFloat(fieldValue) >= 21 ? 'red' : 'black';
  }

  onRowSelectionColor(disableBody, indxSelectedRow, indxSerachSelectedRow, i) {
    let colorClass = '';
    if (this.rowselectionColorNeeded) {
      if (indxSelectedRow == i || indxSerachSelectedRow == i) {
        colorClass += ' table-row-selected-color';
      } else {
        colorClass += '';
      }
    }
    return colorClass;
  }

  selectedRowColIndex: any = '';
  previousIdColSelecedId;
  selectedRowCol(i, j) {
    let currentSelectedColId = 'tableBodyRow' + this.tableName + i + j;
    document.getElementById(
      'tableBodyRow' + this.tableName + i + j
    ).style.boxShadow = 'inset rgba(39, 94, 121, 0.13) 0px 1px 2px 1px';
    if (
      this.previousIdColSelecedId != '' &&
      this.previousIdColSelecedId != null &&
      currentSelectedColId != this.previousIdColSelecedId
    ) {
      document.getElementById(this.previousIdColSelecedId).style.boxShadow =
        'none';
    }
    this.previousIdColSelecedId = 'tableBodyRow' + this.tableName + i + j;
  }

  getSelectedRowColumnColor(selectedRowColIndex, j) {
    let colorClass = '';
    if (this.rowselectionColorNeeded) {
      if (selectedRowColIndex == j) {
        colorClass += ' table-row-selected-color';
      } else {
        colorClass += '';
      }
    }
    return colorClass;
  }

  showNoDataAvaiable(dataModel) {
    if (dataModel == null || dataModel == undefined) {
      return true;
    } else {
      if (dataModel.length == 0) {
        return true;
      }
      return false;
    }
  }

  showDataAvaiableMsg(dataModel) {
    if (dataModel == null || dataModel == undefined) {
      return 'Fetching Data from Server. Please Wait.';
    } else {
      if (dataModel.length == 0) {
        return 'No Data Available';
      }
      return 'Fetching Data from Server. Please Wait.';
    }
  }

  previousSelectedFieldObject = null;
  erromsg = null;
  previousSelectedFeild = null;
  previousSelectedFeildValue = null;
  doCheckPreviousSelectedFeildValueSet = null;

  @Output() tableGeneralFunctions: any;

  onInputFieldFocus(
    event,
    selectedRowDataObject,
    rowColumnField,
    currentFieldValue
  ) {
    this.onFocus.emit({
      event: event,
      selectedRowDataObject: selectedRowDataObject,
      rowColumnField: rowColumnField,
      changedValue: currentFieldValue,
      previousValue: selectedRowDataObject[rowColumnField],
      tableName: this.tableName,
    });

    this.previousSelectedFieldObject = JSON.parse(
      JSON.stringify(selectedRowDataObject)
    );
  }

  onInputFieldBlur(
    event,
    selectedRowDataObject,
    rowColumnField,
    currentFieldValue
  ) {
    let edited = false;
    try {
      if (
        this.previousSelectedFeild != '' &&
        this.previousSelectedFeild == rowColumnField &&
        selectedRowDataObject[rowColumnField] != event.target.value
      ) {
        // if (this.commonSubscribeService.previousFocusedElement.id != evt.target.id) {
        //   this.previousValueObject = JSON.parse(JSON.stringify(currentObject));
        // } else {
        //   if (this.commonSubscribeService.previousFocusedElement.id == evt.target.id) {
        //     if (this.commonSubscribeService.focusedElementValueBeforeEdit != null) {
        //       this.previousValueObject[field] = this.commonSubscribeService.focusedElementValueBeforeEdit;
        //       this.previousValue = this.commonSubscribeService.focusedElementValueBeforeEdit;
        //     }
        //   }
        // }
        // // this.previousValueObject = JSON.parse(JSON.stringify(currentObject));
        // currentObject[field] = evt.target.value;
        // this.previousField = field;
        // // this.commonSubscribeService.focusToLastInputElement
        // // evt.target.value = this.previousValue;
      }

      // else if (currentObject[field] != evt.target.value && this.previousField != field) {
      //   if (this.commonSubscribeService.previousFocusedElement.id != evt.target.id) {
      //     this.previousValueObject = JSON.parse(JSON.stringify(currentObject));
      //   } else {
      //     if (this.commonSubscribeService.previousFocusedElement.id == evt.target.id) {
      //       if (this.commonSubscribeService.focusedElementValueBeforeEdit != null) {
      //         this.previousValueObject[field] = this.commonSubscribeService.focusedElementValueBeforeEdit;
      //         this.previousValue = this.commonSubscribeService.focusedElementValueBeforeEdit;
      //       }
      //     }
      //   }
      //   currentObject[field] = evt.target.value;
      //   this.previousField = field;
      // } else {
      //   if (this.commonSubscribeService.focusedElementValueBeforeEdit != null) {
      //     this.previousValueObject[field] = this.commonSubscribeService.focusedElementValueBeforeEdit;
      //     this.previousValue = this.commonSubscribeService.focusedElementValueBeforeEdit;
      //   }
      // }
      // if(this.commonSubscribeService.previousFocusedElement != null){
      //   if (this.commonSubscribeService.previousFocusedElement.id == evt.target.id) {
      //     edited = true;
      //     this.canCloseOvelay = false;
      //   }
      //   else{
      //     edited = false;
      //     this.canCloseOvelay = false;
      //   }
      // } else{
      //   edited = false;
      //   this.canCloseOvelay = false;
      // }
      // this.checkChange(edited, this.previousValueObject, currentObject, field, evt.target.value, this.previousValue, evt);
    } catch (err) {}
  }

  onInputFieldKeyUp(event, rowResponse, rowColumnField, currentFieldValue) {}

  emitOnRowSelect(response, index) {
    if (this.rowselectionColorNeeded) {
      this.indexSelectedRow = index;
      this.selectedRowDataObject.emit({
        tableName: this.tableName,
        rowData: response,
      });
    }
  }
}
