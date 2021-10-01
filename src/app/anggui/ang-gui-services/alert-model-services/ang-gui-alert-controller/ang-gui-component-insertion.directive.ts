import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ang-gui-component-model-insertion]'
})
export class AngGuiComponentModelInsertionDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
