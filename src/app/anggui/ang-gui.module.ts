import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngGuiAlertComponent } from './alert/ang-gui-alert.component';
import { CommonModule } from '@angular/common';
import { AlertMessageService } from './ang-gui-services/common-message-service/alert-message.service';
import { AngGuiIconsComponent } from './icons/ang-gui-icons.component';
import { AngGuiNavBarComponent } from './nav-bar/ang-gui-nav-bar.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AngGuiAlertComponent, AngGuiIconsComponent,AngGuiNavBarComponent],
  exports: [AngGuiAlertComponent, AngGuiIconsComponent,AngGuiNavBarComponent],
  providers: [AlertMessageService],
})
export class AngGuiModule {}
