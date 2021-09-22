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
}
