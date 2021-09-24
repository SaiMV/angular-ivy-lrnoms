import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngGuiAlertComponent } from './alert/ang-gui-alert.component';
import { CommonModule } from '@angular/common';
import { AlertMessageService } from './ang-gui-services/common-message-service/alert-message.service';
import { AngGuiIconsComponent } from './icons/ang-gui-icons.component';
import { AngGuiNavBarComponent } from './nav-bar/ang-gui-nav-bar.component';
import { AngGuiButtonsComponent } from './buttons/ang-gui-buttons.component';
import { AngGuiInputBoxComponent } from './input-box/ang-gui-input-box.component';
import { AngGuiCheckBoxComponent } from './check-box/ang-gui-check-box.component';
import { AngGuiDropDownComponent } from './drop-down/ang-gui-drop-down.component';
import { AngGuiCardsComponent } from './cards/ang-gui-cards.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    AngGuiAlertComponent,
    AngGuiIconsComponent,
    AngGuiNavBarComponent,
    AngGuiButtonsComponent,
    AngGuiInputBoxComponent,
    AngGuiCheckBoxComponent,
    AngGuiDropDownComponent,
    AngGuiCardsComponent,
  ],
  exports: [
    AngGuiAlertComponent,
    AngGuiIconsComponent,
    AngGuiNavBarComponent,
    AngGuiButtonsComponent,
    AngGuiInputBoxComponent,
    AngGuiCheckBoxComponent,
    AngGuiDropDownComponent,
    AngGuiCardsComponent,
  ],
  providers: [AlertMessageService],
})
export class AngGuiModule {}
