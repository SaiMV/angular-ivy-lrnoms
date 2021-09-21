import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngGuiAlertComponent } from './alert/ang-gui-alert.component';
import { CommonModule } from '@angular/common';
import { AlertMessageService } from './ang-gui-services/common-message-service/alert-message.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AngGuiAlertComponent],
  exports: [AngGuiAlertComponent],
  providers: [AlertMessageService],
})
export class AngGuiModule {}
