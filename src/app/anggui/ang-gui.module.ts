import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { AngGuiCardHeaderComponent } from './cards/card-header/ang-gui-card-header.component';
import { AngGuiCardFooterComponent } from './cards/card-footer/ang-gui-card-footer.component';
import { AngGuiCardContentComponent } from './cards/card-content/ang-gui-card-content.component';
import { AngGuiRadioButtonComponent } from './radio-button/ang-gui-radio-button.component';
import { AngGuiTableComponent } from './table/ang-gui-table.component';
import { AngGuiProgressBarComponent } from './progress-bar/ang-gui-progress-bar.component';
import { AngGuiAlertControllerComponent } from './ang-gui-services/alert-model-services/ang-gui-alert-controller/ang-gui-alert-controller.component';
import { AngGuiPopupComponent } from './popup/ang-gui-popup/ang-gui-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngGuiComponentModelInsertionDirective } from './ang-gui-services/alert-model-services/ang-gui-alert-controller/ang-gui-component-insertion.directive';
import { AngGuiNavBarWithListMenuComponent } from './nav-bar-with-list-menu/ang-gui-nav-bar-with-list-menu.component';

@NgModule({
  imports: [CommonModule, FormsModule, BrowserAnimationsModule],
  declarations: [
    AngGuiAlertComponent,
    AngGuiIconsComponent,
    AngGuiNavBarComponent,
    AngGuiButtonsComponent,
    AngGuiInputBoxComponent,
    AngGuiCheckBoxComponent,
    AngGuiDropDownComponent,
    AngGuiCardsComponent,
    AngGuiCardHeaderComponent,
    AngGuiCardFooterComponent,
    AngGuiCardContentComponent,
    AngGuiRadioButtonComponent,
    AngGuiTableComponent,
    AngGuiProgressBarComponent,
    AngGuiAlertControllerComponent,
    AngGuiPopupComponent,
    AngGuiComponentModelInsertionDirective,
    AngGuiNavBarWithListMenuComponent
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
    AngGuiCardHeaderComponent,
    AngGuiCardFooterComponent,
    AngGuiCardContentComponent,
    AngGuiRadioButtonComponent,
    AngGuiTableComponent,
    AngGuiProgressBarComponent,
    AngGuiAlertControllerComponent,
    AngGuiPopupComponent,
    AngGuiNavBarWithListMenuComponent
  ],
  providers: [AlertMessageService],
  entryComponents: [AngGuiAlertControllerComponent, AngGuiPopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AngGuiModule {}
