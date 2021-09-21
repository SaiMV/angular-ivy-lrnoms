import { Component } from '@angular/core';
import { AlertMessageService } from 'src/app/anggui/ang-gui-services/common-message-service/alert-message.service';

@Component({
  selector: 'how-to-use-angui',
  templateUrl: './how-to-use-angui.component.html',
  styleUrls: ['./how-to-use-angui.component.css'],
})
export class HowToUseAngGUI {
  constructor(private alertMessageService: AlertMessageService) {
    this.showErrorMessage();
  }

  showErrorMessage() {
    this.alertMessageService.errorCallBackMsg({
      alertEnabled: true,
      isRedAlert: true,
      message: 'Hi, This is a simple alert.',
    });
  }
}
