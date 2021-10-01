import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AlertMessageService } from './anggui/ang-gui-services/common-message-service/alert-message.service';
import { AppComponent } from './app.component';
import { AngGuiModule } from './anggui/ang-gui.module';
import { HowToUseAngGUI } from './pages/how-to-use-angui/how-to-use-angui.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AngGuiModule],
  declarations: [AppComponent, HowToUseAngGUI],
  bootstrap: [AppComponent],
  providers: [AlertMessageService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {}
