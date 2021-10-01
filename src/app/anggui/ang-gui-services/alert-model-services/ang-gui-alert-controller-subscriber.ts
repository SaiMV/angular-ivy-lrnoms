import { Observable, Subject } from 'rxjs';

export class AngGuiAlertControllerModelSubscriber {
  constructor() {}

  onModelClose(result?: any) {
    this.modelOnClose.next(result);
  }

  private readonly modelOnClose = new Subject<any>();
  onClose: Observable<any> = this.modelOnClose.asObservable();
}
