import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  @Input() customLabel: string = '';
  @Output() submitFormFunction: EventEmitter<Event> = new EventEmitter<Event>();

  onSubmit(event: Event): void {
    this.submitFormFunction.emit(event);
  }
}
