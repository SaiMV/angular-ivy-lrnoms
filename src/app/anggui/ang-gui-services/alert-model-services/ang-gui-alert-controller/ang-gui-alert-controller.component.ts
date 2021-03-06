import {
  Component,
  Type,
  ComponentFactoryResolver,
  ViewChild,
  OnDestroy,
  ComponentRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';

import { Subject } from 'rxjs';
import { AngGuiAlertControllerModelSubscriber } from '../ang-gui-alert-controller-subscriber';
import { trigger, transition, style, animate } from '@angular/animations';
import { AngGuiComponentModelInsertionDirective } from './ang-gui-component-insertion.directive';

@Component({
  selector: 'ang-gui-alert-controller',
  templateUrl: './ang-gui-alert-controller.component.html',
  styleUrls: ['./ang-gui-alert-controller.component.css'],
  animations: [
    trigger('zoom-alert', [
      transition('void => *', [
        style({
          transform: 'scale3d(.3,.3,.3)',
        }),
        animate(150),
      ]),
      transition('* => void', [
        animate(
          100,
          style({
            transform: 'scale3d(.3,.3,.3)',
          })
        ),
      ]),
    ]),
  ],
})
export class AngGuiAlertControllerComponent
  implements AfterViewInit, OnDestroy
{
  componentRef: ComponentRef<any>;

  @ViewChild(AngGuiComponentModelInsertionDirective)
  insertionPoint: AngGuiComponentModelInsertionDirective;
  showAlert: boolean = true;
  private readonly onPopupClose = new Subject<any>();
  public onClose = this.onPopupClose.asObservable();

  childComponentType: Type<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private changeDetector: ChangeDetectorRef,
    private dialogRef: AngGuiAlertControllerModelSubscriber
  ) {}

  ngAfterViewInit() {
    this.popupChildComponent(this.childComponentType);
    this.changeDetector.detectChanges();
    this.dialogRef.onClose.subscribe((data) => {
      this.showAlert = false;
    });
  }

  popupChildComponent(componentType: Type<any>) {
    let componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(componentType);
    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  close() {
    this.showAlert = false;
    setTimeout(() => {
      this.onPopupClose.next();
    }, 100);
  }
}
