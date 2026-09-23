import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-microsoft',
  styleUrl: './microsoft.scss',
  templateUrl: './microsoft.html',
})
export class Microsoft {
  @Input() colorHex: string = "";
  @Input() cssClass: string = "";
  @Output() colorSelected: EventEmitter<string> = new EventEmitter();

  squareClick() {
    this.colorSelected.emit(this.colorHex);
  }
}

