import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ang-gui-input-box',
  templateUrl: './ang-gui-input-box.component.html',
  styleUrls: ['./ang-gui-input-box.component.css'],
})
export class AngGuiInputBoxComponent {
  @Input() type: string = 'normal';
  @Input() placeHolder: string = '';
  @Input() maxLength;
  @Input() minLength;
  @Input() validationMessage: String = '';
  @Input() inputName: String = '';
  @Input() inlineInputName: boolean = false;
  @Input() inputNameFeildWidth: String = '100';

  @Input() placeholder: String = 'Enter a value';
  @Input() noBorder: boolean = false;
  @Input() validationFailed: boolean = false;
  @Input() validationSuccess: boolean = false;
  @Input() value: any;
  @Output() onKeyupValue = new EventEmitter<any>();
  @Input() inputNameAlign = '';
  constructor() {}

  getClassName() {
    let className = 'input-box';

    this.noBorder ? (className += ' no-border ') : (className += '');
    this.validationFailed ? (className += ' error ') : (className += '');
    this.validationSuccess ? (className += ' success ') : (className += '');
    return className;
  }

  getValidationClassName() {
    let className = 'validation-msg-area';
    this.validationFailed ? (className += ' error ') : (className += '');
    this.validationSuccess ? (className += ' success ') : (className += '');
    return className;
  }

  onKeyup(event) {
    this.value = event.target.value;
    this.onKeyupValue.emit({ inputEvent: event, value: this.value });
  }
  getAlingment() {
    console.log(this.inputNameAlign);

    let alingment = 'left';
    this.inputNameAlign == 'center'
      ? (alingment = 'center')
      : (alingment = 'left');
    this.inputNameAlign == 'right'
      ? (alingment = 'right')
      : (alingment = 'left');
    return alingment;
  }
}
