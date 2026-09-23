import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-microsoft',
  styleUrl: './microsoft.scss',
  templateUrl: './microsoft.html',
})
export class Microsoft {
  @Input() color: string = "";
  @Output() colorSelected: EventEmitter<string> = new EventEmitter();

  public squareClick(): void {
    this.colorSelected.emit(this.color);
  }
}

