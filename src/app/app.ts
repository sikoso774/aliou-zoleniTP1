import { Component } from '@angular/core';

@Component({
  // imports: [RouterOutlet, NgClass],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // protected readonly title = signal('aliouzoleniTP1');
  public bgColor: string = "white";

  public setBgColor(color: string): void {
    this.bgColor = color
  }

}