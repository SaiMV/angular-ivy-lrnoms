import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngGuiModule } from './anggui/ang-gui.module';
import { HowToUseAngGUI } from './pages/how-to-use-angui/how-to-use-angui.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AngGuiModule],
  declarations: [AppComponent, HowToUseAngGUI],
  bootstrap: [AppComponent],
  providers: [AlertMessageService],
})
export class AppModule {}
