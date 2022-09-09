import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() labelButton: string = '';
  @Output() clickFunction: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.clickFunction.emit();
  }
  
}
