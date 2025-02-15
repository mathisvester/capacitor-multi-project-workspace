import { Component, input } from '@angular/core';
import { PageTitleComponent } from "../../page-title/page-title.component";

@Component({
  selector: 'app-logout-page',
  imports: [PageTitleComponent],
  templateUrl: './logout-page.component.html',
  styleUrl: './logout-page.component.scss'
})
export class LogoutPageComponent {
}
