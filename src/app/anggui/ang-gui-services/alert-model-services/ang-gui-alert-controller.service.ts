import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  Type,
  EmbeddedViewRef,
  ComponentRef,
} from '@angular/core';
import { AngGuiModule } from '../../ang-gui.module';

import { AngGuiAlertControllerModelInjector } from './ang-gui-alert-controller-injector';
import { AngGuiAlertControllerModelData } from './ang-gui-alert-controller-data';
import { AngGuiAlertControllerModelSubscriber } from './ang-gui-alert-controller-subscriber';
import { AlertModel } from './ang-gui-alert-model/ang-gui-alert-model';
import { AngGuiAlertControllerComponent } from './ang-gui-alert-controller/ang-gui-alert-controller.component';
import { AngGuiAlertComponent } from '../../alert/ang-gui-alert.component';
import { AngGuiPopupComponent } from '../../popup/ang-gui-popup/ang-gui-popup.component';

@Injectable({
  providedIn: AngGuiModule,
})
export class AngGuiAlertControlerService {
  dialogComponentRef: ComponentRef<AngGuiAlertControllerComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  public openAlert(title, message) {
    let alertModel = new AlertModel();
    alertModel.title = title;
    alertModel.message = message;
    let dataConfig = new AngGuiAlertControllerModelData();
    dataConfig.data = alertModel;
    return this.open(AngGuiPopupComponent, dataConfig);
  }

  public openConfirmAlert(title, message, value) {
    let alertModel = new AlertModel();
    alertModel.inputValue = value;
    alertModel.title = title;
    alertModel.message = message;
    alertModel.isConfirmAlert = true;
    let dataConfig = new AngGuiAlertControllerModelData();
    dataConfig.data = alertModel;
    return this.open(AngGuiPopupComponent, dataConfig);
  }

  private open(
    componentType: Type<any>,
    config: AngGuiAlertControllerModelData
  ) {
    const dialogRef = this.appendDialogComponentToBody(config);
    this.dialogComponentRef.instance.childComponentType = componentType;
    return dialogRef;
  }

  private appendDialogComponentToBody(config: AngGuiAlertControllerModelData) {
    const map = new WeakMap();
    map.set(AngGuiAlertControllerModelData, config);

    const dialogRef = new AngGuiAlertControllerModelSubscriber();
    map.set(AngGuiAlertControllerModelSubscriber, dialogRef);

    const sub = dialogRef.onClose.subscribe(() => {
      this.removeDialogComponentFromBody();
      sub.unsubscribe();
    });

    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        AngGuiAlertControllerComponent
      );
    const componentRef = componentFactory.create(
      new AngGuiAlertControllerModelInjector(this.injector, map)
    );
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.dialogComponentRef = componentRef;
    this.dialogComponentRef.instance.onClose.subscribe(() => {
      this.removeDialogComponentFromBody();
    });

    return dialogRef;
  }

  private removeDialogComponentFromBody() {
    setTimeout(() => {
      this.appRef.detachView(this.dialogComponentRef.hostView);
      this.dialogComponentRef.destroy();
    }, 100);
  }
}
