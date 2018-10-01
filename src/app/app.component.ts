import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  nav a{
    padding: 4px;
    border: 2px solid black;
    text-decoration: none;
  }
  .ativo{
    background-color: gray;
    color: white
  }
  `]
})
export class AppComponent {
}
