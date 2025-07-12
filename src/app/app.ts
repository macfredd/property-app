import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/Components/header/header';
import { Footer } from './shared/Components/footer/footer';
import { LeftSidebar } from './shared/Components/left-sidebar/left-sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, LeftSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'property-app';
}
