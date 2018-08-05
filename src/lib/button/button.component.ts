import { Component, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'mai-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() onClick: EventEmitter = new EventEmitter();
  color = 'blue';
}
