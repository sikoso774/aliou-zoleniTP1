import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { Header } from './header/header';
import { Microsoft } from './microsoft/microsoft';
import { Footer } from './footer/footer';

@Component({
  imports: [RouterOutlet, NgClass, Header, Microsoft, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})

export class AppComponent {
  public bgColor: string = ''

  public changeColor(newColor: string) {
    this.bgColor = newColor;
  }
}
