import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngGuiAlertComponent } from './alert/ang-gui-alert.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AngGuiAlertComponent],
  exports: [AngGuiAlertComponent],
})
export class AngGuiModule {}
