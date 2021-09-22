import { Component } from '@angular/core';

import { AlertMessageService } from '../../anggui/ang-gui-services/common-message-service/alert-message.service';
@Component({
  selector: 'how-to-use-angui',
  templateUrl: './how-to-use-angui.component.html',
  styleUrls: ['./how-to-use-angui.component.css'],
})
export class HowToUseAngGUI {
  constructor(private alertMessageService: AlertMessageService) {}
  showSuccessMessage() {
    console.log('called');
    this.alertMessageService.errorCallBackMsg({
      errorType: 'success',
      message: 'Hi, This is a simple alert.',
    });
  }
  showWarningMessage() {
    console.log('called');
    this.alertMessageService.errorCallBackMsg({
      errorType: 'warning',
      message: 'Hi, This is a simple alert.',
    });
  }

  showErrorMessage() {
    console.log('called');
    this.alertMessageService.errorCallBackMsg({
      errorType: 'error',
      message: 'Hi, This is a simple alert.',
    });
  }
}
