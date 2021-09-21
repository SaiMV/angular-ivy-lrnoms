import { Component, OnDestroy } from '@angular/core';
import { AlertMessageService } from '../ang-gui-services/common-message-service/alert-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ang-gui-alert',
  templateUrl: './ang-gui-alert.component.html',
  styleUrls: ['./ang-gui-alert.component.css'],
})
export class AngGuiAlertComponent implements OnDestroy {
  showAlertMessage: boolean = false;
  alertMessage: String = '';
  isRedAlert = true;

  alertSubscription: Subscription =
    this.alertMessageService.alertMessageCallBack.subscribe(
      (data: any) => {
        let alertData = <alertModel>data;
        if (alertData.alertEnabled) {
          this.showAlertMessage = true;
          this.alertMessage = alertData.message;
          if (alertData.isRedAlert != null) {
            this.isRedAlert = alertData.isRedAlert;
          } else {
            this.isRedAlert = false;
          }
        } else {
          this.showAlertMessage = false;
          this.alertMessage = alertData.message;
        }
      },
      (err) => {
        this.showAlertMessage = false;
        this.alertMessage = '';
      },
      () => {
        this.showAlertMessage = false;
        this.alertMessage = '';
      }
    );

  constructor(private alertMessageService: AlertMessageService) {}

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
  }

  /**
   * Method to close alert.
   */
  closeAlert() {
    this.showAlertMessage = false;
    this.alertMessage = '';
    this.isRedAlert = false;
  }
}

/**
 * Model class to add message, show and hide alertIcon.
 *
 */
class alertModel {
  alertEnabled: any;
  message: any;
  isRedAlert: any;
}
