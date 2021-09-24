export class TablePagination {
  paginationNeeded: boolean = true;
  private paginationElementsArray: any[] = [];
  paginationPreviousPageIndex: any = 0;
  paginationNextPageIndex: any = 0;
  paginationStepperIndex: any = 25;
  previousDataLength: any = 0;
  paginationLastIndex: any = 0;
  enableVirtualScroll(dataModelLength) {
    // if()
    if (this.paginationNextPageIndex == 0) {
      this.previousDataLength = dataModelLength; // Take length of first data
      this.paginationLastIndex = dataModelLength - 1;
      if (dataModelLength != 0) {
        for (let i = 0; i < dataModelLength; i++) {
          let tableRowId = 'tableBodyRow' + i;
          let objRowDataHide = {};
          if (i > 25) {
            objRowDataHide['tableBodyRow' + i] = false;
          } else {
            objRowDataHide['tableBodyRow' + i] = true;
          }
          this.paginationElementsArray.push(objRowDataHide);
        }
      }
    } else if (
      this.paginationLastIndex > 0 &&
      this.paginationLastIndex < dataModelLength
    ) {
      this.paginationLastIndex = dataModelLength - 1;
      for (let i = this.previousDataLength; i < dataModelLength; i++) {
        let tableRowId = 'tableBodyRow' + i;
        let objRowDataHide = {};
        objRowDataHide['tableBodyRow' + i] = false;
        this.paginationElementsArray.push(objRowDataHide);
      }
      this.previousDataLength = dataModelLength; // Take length of last data set loaded
    }
  }

  stepToNextPage() {
    if (this.paginationNeeded) {
    }
  }
}
