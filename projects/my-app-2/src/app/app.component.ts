import { Component } from '@angular/core';
import { LoginComponent } from 'my-lib';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app-2';
}
