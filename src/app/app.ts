import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  // imports: [RouterOutlet, NgClass],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('aliouzoleniTP1');
}
