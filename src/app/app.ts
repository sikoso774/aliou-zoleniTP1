import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { Microsoft } from './microsoft/microsoft';

@Component({
  imports: [RouterOutlet, NgClass, Microsoft],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})

export class AppComponent {
  bgColor: string = ''

  changeColor(newColor: string) {
    this.bgColor = newColor;
  }
}
