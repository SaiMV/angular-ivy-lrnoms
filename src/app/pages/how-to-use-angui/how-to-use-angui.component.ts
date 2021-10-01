import { Component } from '@angular/core';
import { AngGuiAlertControlerService } from '../../anggui/ang-gui-services/alert-model-services/ang-gui-alert-controller.service';

import { AlertMessageService } from '../../anggui/ang-gui-services/common-message-service/alert-message.service';
@Component({
  selector: 'how-to-use-angui',
  templateUrl: './how-to-use-angui.component.html',
  styleUrls: ['./how-to-use-angui.component.css'],
})
export class HowToUseAngGUI {
  constructor(private alertMessageService: AlertMessageService,public angGuiAlertControler: AngGuiAlertControlerService) {}
  showSuccessMessage() {
    this.alertMessageService.errorCallBackMsg({
      errorType: 'success',
      message: 'Hi, This is a success message alert.',
    });
  }

  showWarningMessage() {
    this.alertMessageService.errorCallBackMsg({
      errorType: 'warning',
      message: 'Hi, This is a warning message alert.',
    });
  }

  showErrorMessage() {
    this.alertMessageService.errorCallBackMsg({
      errorType: 'error',
      message: 'Hi, This is an error message alert.',
    });
  }


  openAlert(){
    const angiuiAlertControlerRef = this.angGuiAlertControler.openAlert("Incorrect Name","Please Enter Your Name");
    angiuiAlertControlerRef.onClose.subscribe(result => {
      console.log('Alert Popup closed', result);
    });
  }

  openConfirmAlert(){
    const angiuiAlertControlerRef = this.angGuiAlertControler.openConfirmAlert("Incorrect Name","Please Enter Your Name",100);
    angiuiAlertControlerRef.onClose.subscribe(result => {
      console.log('Confirmation Popup Result : ', result);
    });
  }

}
