import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'mai-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() btnStyle: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
}
