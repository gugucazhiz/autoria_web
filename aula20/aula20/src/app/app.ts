import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule,MatToolbarModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('aula20');
}
