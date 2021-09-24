import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ang-gui--radio-button',
  templateUrl: './ang-gui-radio-button.component.html',
  styleUrls: ['./ang-gui-radio-button.component.css'],
})
export class AngGuiRadioButtonComponent implements OnInit {
  @Input() text: String = 'Radio Button';
  constructor() {}

  ngOnInit() {}
}
