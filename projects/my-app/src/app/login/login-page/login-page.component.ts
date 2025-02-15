import { Component } from '@angular/core';
import { LoginComponent } from 'my-lib';
import { PageTitleComponent } from "../../page-title/page-title.component";

@Component({
  selector: 'app-login-page',
  imports: [LoginComponent, PageTitleComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
}
