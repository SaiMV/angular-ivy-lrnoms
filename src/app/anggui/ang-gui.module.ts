import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngGuiAlertComponent } from './alert/ang-gui-alert.component';
import { CommonModule } from '@angular/common';
import { AlertMessageService } from './ang-gui-services/common-message-service/alert-message.service';
import { AngGuiIconsComponent } from './icons/ang-gui-icons.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AngGuiAlertComponent, AngGuiIconsComponent],
  exports: [AngGuiAlertComponent, AngGuiIconsComponent,],
  providers: [AlertMessageService],
})
export class AngGuiModule {}
