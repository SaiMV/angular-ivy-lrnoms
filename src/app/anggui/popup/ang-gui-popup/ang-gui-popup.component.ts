import { Component,Input } from '@angular/core';
import { AngGuiAlertControllerModelData } from '../../ang-gui-services/alert-model-services/ang-gui-alert-controller-data';
import { AngGuiAlertControllerModelSubscriber } from '../../ang-gui-services/alert-model-services/ang-gui-alert-controller-subscriber';

@Component({
  selector: 'ang-gui-popup',
  templateUrl: './ang-gui-popup.component.html',
  styleUrls: ['./ang-gui-popup.component.css'],
})
export class AngGuiPopupComponent {
  constructor(public alertControllerModelData: AngGuiAlertControllerModelData,
     public alertControllerSubscriber: AngGuiAlertControllerModelSubscriber) {
      console.log(this.alertControllerModelData.data.inputValue)
  }
  currentValue:any = "";
  closeAlert(isConfirmAlert,empty) {
    if(isConfirmAlert){
      if(empty){
        this.alertControllerSubscriber.onModelClose(null)
        return;
      }
      this.alertControllerSubscriber.onModelClose(this.currentValue);
      return;
    }
    this.alertControllerSubscriber.onModelClose('Alert Closed');
  }

  onKeyupValue(event){
    this.alertControllerModelData.data.inputValue =  event.value;
    this.currentValue = this.alertControllerModelData.data.inputValue ;
  }

}
