import { Component, OnDestroy, Input } from '@angular/core';
import { AlertMessageService } from '../ang-gui-services/common-message-service/alert-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ang-gui-alert',
  templateUrl: './ang-gui-alert.component.html',
  styleUrls: ['./ang-gui-alert.component.css'],
})
export class AngGuiAlertComponent implements OnDestroy {
  @Input() showAlertMessage: boolean = false;
  @Input() alertMessage: String = '';
  @Input() errorType = 'normal';

  alertSubscription: Subscription =
    this.alertMessageService.alertMessageCallBack.subscribe(
      (data: any) => {
        if(this.showAlertMessage){
          return true;
        }
        let alertData = <alertModel>data;
        this.showAlertMessage = true;
        this.errorType = alertData.errorType;
        this.alertMessage = alertData.message;
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
    this.errorType = 'normal';
  }
}

/**
 * Model class to add message, show and hide alertIcon.
 *
 */
class alertModel {
  alertEnabled: any;
  message: any;
  errorType: any;
}
